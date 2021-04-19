const b = {
  name: "jay",
  say() {console.log(this)}
}

const c = {
  name: 'jay',
  say() {return function() {console.log(this)}}
}

const d = {
  name: 'jay',
  say() {return () => console.log(this)}
}

