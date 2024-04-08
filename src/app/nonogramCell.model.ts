export class nonoGramCell {
    
    status: string;
    shallBeFilled: boolean;
    x: number;
    y: number;
    canBeEdited:boolean;

    constructor(status: string, x: number, y: number, shallBeFilled: boolean, canBeEdited:boolean) {


      this.status = status;
      this.x = x;
      this.y = y;
      this.shallBeFilled = shallBeFilled;
      this.canBeEdited = canBeEdited;
    }


    toggleState(currentFill: string): void {
      if (currentFill == this.status) {
        this.status = 'empty';
      }
      else {
        this.status = currentFill;
      }
    }
  }