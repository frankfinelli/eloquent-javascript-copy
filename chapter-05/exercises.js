// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr, o = []) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      o.push(arr[x][y])
    }
  }

  return o
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(init, cond, act, out) {
  while (cond(init)) {
    out(init)
    init = act(init)
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, fx) {
  for (let x = 0; x < arr.length; x++) {
    if (!fx(arr[x])) return false
  }

  return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {

  //using 'the count' instead of array lengths
  let pts = 0 //port to starboard (ltr)
  let stp = 0 //starboard to port (rtl)
  let b2s = 0 //bow to stern (ttb)

  for (let x = 0; x < str.length; x++) {
    /* Apparently, there are some unicode characters that go beyond the 1:1 storing capabilities of UTF-16.
      Some characters need to be stored as two separate values past the equivalent of U-<65535th bit>, 
      which charCodeAt (cca) represents; 
      
      However, codePointAt (cpa) recognizes the relevant pair into one value. 
      This works where there is some wacky character from some ancient language that's stored as 2-unit lengths in UTF-16 
      instead of 1 as a single character. 
    */
    
    //this is the helper droid I'm looking for
    let charCoal = characterScript(str.codePointAt(x))

    //how charCoal "burns"
    if (charCoal !== null) {
      if (charCoal.direction === 'ltr') pts++
      else if (charCoal.direction === 'rtl') stp++
      else if (charCoal.direction === 'ttb') b2s++
    }

  }
  if (pts > stp && pts > b2s) return 'ltr'
  if (stp > pts && stp > b2s) return 'rtl'
  if (b2s > pts && b2s > stp) return 'ttb'

  return undefined //if the language is extraterrestrial/gobbledygook
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};