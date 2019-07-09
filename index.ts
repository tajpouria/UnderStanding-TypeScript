class myMap<T>{
  private _map : {[key: string]: T} = {}
  private _itemNoteFoud = 'There is no item specified by the given key.'

  setItems(key:string,item:T){
    return !this._map.key ? new Error(this._itemNoteFoud): this._map.key
  }

  getItem(key:string){
    return this._map.key
  }

  clearItem(key:string){
   return !this._map.key? new Error (this._itemNoteFoud): delete this._map[key]
  }

  printItems(){
    return this._map
  }
}

const map1 = new myMap<string>()
map1.setItems('pou',2)
console.log(map1.getItem('pou'))
map1.clearItem('pou')
map1.printItems()
