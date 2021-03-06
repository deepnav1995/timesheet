export class JSONToCSV {
      private AddValue(Row: string, Value: string) {
        let Comma: string = ',';
        if (Row === '')
          Comma = '';
        return Row + Comma + Value;
      }
    
      private GetHeader(Item: any) {
        let Row: string = '';
        for (var Key in Item) {
          Row = this.AddValue(Row, Key);
        }
        return Row + '\r\n';
      }
    
      private GetRow(Item: any) {
        let Row: string = '';
        for (var Key in Item) {
          Row = this.AddValue(Row, Item[Key]);
        }
        return Row + '\r\n';
      }
    
      private GetPropCount(Item: any) {
        return Object.keys(Item).length;
      }
    
      public Convert(Data: any, Filename: string) {
        let CSV: string = '';
        let ColumnsObject: any = null;
        for (var Item of Data) {
          if ((ColumnsObject == null) || (this.GetPropCount(Item) > this.GetPropCount(ColumnsObject))) {
            ColumnsObject = Item;
          }
          CSV = CSV + this.GetRow(Item);
        }
        CSV = this.GetHeader(ColumnsObject) + CSV;
        let CSVBlob = new Blob([CSV], { type: 'csv' });
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(CSVBlob, Filename);
        } else {
          // window.open(URL.createObjectURL(CSVBlob));
          let url= window.URL.createObjectURL(CSVBlob);
          let Anchor: any = document.createElement('a');
          Anchor.setAttribute('style', 'display:none;');
          document.body.appendChild(Anchor);
          Anchor.href = url;
          Anchor.download = Filename;
          Anchor.click();
        }
      }
}