status = ""
function preload(){
imag = loadImage("House.jpg.jpg")
}
function setup(){
canvas = createCanvas(400,500)
canvas.position(400,150)
object = ml5.objectDetector("cocossd", ModelLoaded)
document.getElementById("status").innerHTML = "Status: Detecting Objects."
}
function ModelLoaded() {
    console.log("Model Loaded")
    status = true
    objection.detect(img, gotResults)
  
  }
  function gotResults(results, error){
    if(error){
      console.error(error)
    }
    console.log(results)
    objects = results
  }
function draw(){

}