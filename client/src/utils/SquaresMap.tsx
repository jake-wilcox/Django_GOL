class SquaresMap<K, V> {

  private map: Map<string, any> = new Map();
  private separator: string = '-'


  private generateKey(cords: K[]): string {
    return cords.join(this.separator)
  }

  // check if the value is in our map and if not add it with one
  incrament(key: K[]): void {
    const keyString = this.generateKey(key);
    if(this.map.has(keyString)){
     this.map.set(keyString, this.map.get(keyString)! + 1) 
    }
    else{
          this.map.set(keyString, 1);
    }
  }


  *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const [keyString, value] of this.map) {
      const key = keyString.split(this.separator).map(Number) as K;
      yield [key, value];
    }
  }


}
export default SquaresMap

