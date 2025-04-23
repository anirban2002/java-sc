const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
const allHeros=marvel_heros.concat (dc_heros)
console.log(allHeros);
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)
const another_array=[1,2,3,[4,5,6,],7,[8,9]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.from("Anirban"))
