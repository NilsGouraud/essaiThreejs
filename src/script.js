import * as T from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import * as dat from "dat.gui";
console.log("hello there");

/*textures*/
import starsTexture from "./img/stars.jpg";
import sunTexture from "./img/sun.jpg";
import mercuryTexture from "./img/mercury.jpg";
import venusTexture from "./img/venus.jpg";
import earthTexture from "./img/earth.jpg";
import marsTexture from "./img/mars.jpg";
import jupiterTexture from "./img/jupiter.jpg";
import saturnTexture from "./img/saturn.jpg";
import saturnRingTexture from "./img/saturnRing.png";
import uranusTexture from "./img/uranus.jpg";
import uranusRingTexture from "./img/uranusRing.png";
import neptuneTexture from "./img/neptune.jpg";
import plutoTexture from "./img/pluto.jpg";


const size={
    width:window.innerWidth,
    height:window.innerHeight
};
const defaultRatio=size.width/size.height;

const renderer=new T.WebGL1Renderer();
renderer.setSize(size.width,size.height);
document.body.append(renderer.domElement);

const camera=new T.PerspectiveCamera(90,defaultRatio,0.5,4500);
camera.position.set(0,50,50)
const scene=new T.Scene();

const textureLoader=new T.TextureLoader();

const sizePlanets={
    sun         :100,    //actually 700
    mercury     :6,     //actually 2
    venus       :18,     //actually 6
    earth       :18,     //actually 6
    mars        :9,     //actually 3
    jupiter     :70,
    saturn      :60,
    saturnRing  :130.6,
    uranus      :25,
    uranusRing  :50,
    neptune     :25,
    pluto       :5,     //actually 1
}



const sunGeometry=new T.SphereGeometry(sizePlanets.sun,30,30)
const sunMaterial=new T.MeshBasicMaterial({map:textureLoader.load(sunTexture)})
const sun=new T.Mesh(sunGeometry,sunMaterial);

const mercuryGeometry=new T.SphereGeometry(sizePlanets.mercury,30,30);
const mercuryMaterial=new T.MeshStandardMaterial({map:textureLoader.load(mercuryTexture)});
const mercury=new T.Mesh(mercuryGeometry,mercuryMaterial);
const mercuryObject=new T.Object3D();
mercuryObject.add(mercury);

const venusGeometry=new T.SphereGeometry(sizePlanets.venus,30,30);
const venusMaterial=new T.MeshStandardMaterial({map:textureLoader.load(venusTexture)});
const venus=new T.Mesh(venusGeometry,venusMaterial);
const venusObject=new T.Object3D();
venusObject.add(venus);

const earthGeometry=new T.SphereGeometry(sizePlanets.earth,30,30);
const earthMaterial=new T.MeshStandardMaterial({map:textureLoader.load(earthTexture)});
const earth=new T.Mesh(earthGeometry,earthMaterial);
const earthObject=new T.Object3D();
earthObject.add(earth);

const marsGeometry=new T.SphereGeometry(sizePlanets.mars,30,30);
const marsMaterial=new T.MeshStandardMaterial({map:textureLoader.load(marsTexture)});
const mars=new T.Mesh(marsGeometry,marsMaterial);
const marsObject=new T.Object3D();
marsObject.add(mars);

const jupiterGeometry=new T.SphereGeometry(sizePlanets.jupiter,30,30);
const jupiterMaterial=new T.MeshStandardMaterial({map:textureLoader.load(jupiterTexture)});
const jupiter=new T.Mesh(jupiterGeometry,jupiterMaterial);
const jupiterObject=new T.Object3D();
jupiterObject.add(jupiter);

const saturnGeometry=new T.SphereGeometry(sizePlanets.saturn,30,30);
const saturnMaterial=new T.MeshStandardMaterial({map:textureLoader.load(saturnTexture)});
const saturnRingGeometry=new T.RingGeometry(sizePlanets.saturn*1.5,sizePlanets.saturnRing,30);
const saturnRingMaterial=new T.MeshStandardMaterial({map:textureLoader.load(saturnRingTexture),side:T.DoubleSide});
const saturn=new T.Mesh(saturnGeometry,saturnMaterial);
const saturnRing=new T.Mesh(saturnRingGeometry,saturnRingMaterial);
saturn.add(saturnRing);
saturnRing.rotateX(90*Math.PI/180);
saturnRing.rotateY(10*Math.PI/180);
const saturnObject=new T.Object3D();
saturnObject.add(saturn);

const uranusGeometry=new T.SphereGeometry(sizePlanets.uranus,30,30);
const uranusMaterial=new T.MeshStandardMaterial({map:textureLoader.load(uranusTexture)});
const uranusRingGeometry=new T.RingGeometry(sizePlanets.uranus*1.5,sizePlanets.uranusRing,30);
const uranusRingMaterial=new T.MeshStandardMaterial({map:textureLoader.load(uranusRingTexture),side:T.DoubleSide});
const uranusRing=new T.Mesh(uranusRingGeometry,uranusRingMaterial)
const uranus=new T.Mesh(uranusGeometry,uranusMaterial);
uranus.add(uranusRing);
uranusRing.rotateX(90*Math.PI/180);
saturnRing.rotateY(-10*Math.PI/180);
const uranusObject=new T.Object3D();
uranusObject.add(uranus);

const neptuneGeometry=new T.SphereGeometry(sizePlanets.neptune,30,30);
const neptuneMaterial=new T.MeshStandardMaterial({map:textureLoader.load(neptuneTexture)});
const neptune=new T.Mesh(neptuneGeometry,neptuneMaterial);
const neptuneObject=new T.Object3D();
neptuneObject.add(neptune);

const plutoGeometry=new T.SphereGeometry(sizePlanets.pluto,30,30);
const plutoMaterial=new T.MeshStandardMaterial({map:textureLoader.load(plutoTexture)});
const pluto=new T.Mesh(plutoGeometry,plutoMaterial);
const plutoObject=new T.Object3D();
plutoObject.add(pluto);


const orbitControls=new OrbitControls(camera,renderer.domElement);




const box =new T.Mesh(new T.BoxGeometry(5,5,5),new T.MeshBasicMaterial({color:"red",wireframe:true}))
const box2 =new T.Mesh(new T.BoxGeometry(5,5,5),new T.MeshBasicMaterial({color:"red",wireframe:true}))
box2.position.x=10;

scene.add(box)
scene.add(box2)


scene.add(sun);
scene.add(mercuryObject);
scene.add(venusObject);
scene.add(earthObject);
scene.add(marsObject);
scene.add(jupiterObject);
scene.add(saturnObject);
scene.add(uranusObject);
scene.add(neptuneObject);
scene.add(plutoObject);

/*
const gui=new dat.GUI();
const options={
    plutoDistance:580,
}
gui.add(options,"plutoDistance",0,580).onChange(e=>{
    plutoDistance=e;
})
*/

const distances={
    sun         :0, 
    mercury     :45,
    venus       :107    ,
    earth       :147    ,
    mars        :206    ,
    jupiter     :740    ,
    saturn      :1300    ,
    uranus      :2700    ,
    neptune     :4400    ,
    pluto       :14000,
}


mercury.position.x=distances.mercury+100;
venus.position.x=distances.venus+200;
earth.position.x=distances.earth+300;
mars.position.x=distances.mars+300;
jupiter.position.x=distances.jupiter/1.05;
saturn.position.x=distances.saturn/1.3;
uranus.position.x=distances.uranus/2.2;
neptune.position.x=distances.neptune/2.2;
pluto.position.x=distances.pluto/6;
camera.position.z=1000;
camera.position.y=600;
camera.position.x=-300;


const pointLight=new T.PointLight("#faf3de",10,4500,0);
scene.add(pointLight);
const ambientLight=new T.AmbientLight("white",0.2);
scene.add(ambientLight);

//texture loader for the skybox
const cubeTextureLoader=new T.CubeTextureLoader();
scene.background=cubeTextureLoader.load(
    [
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture
    ]
    )
    
    window.addEventListener("resize",()=>{
        camera.aspect=window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
            window.innerWidth,
            window.innerHeight
            )
        })
        
        
        
        
        //offsetting the planets
        earthObject.rotateY(180);
        marsObject.rotateY(20);
        jupiterObject.rotateY(40);
        saturnObject.rotateY(100);
        uranusObject.rotateY(60);
        neptuneObject.rotateY(80);
        plutoObject.rotateY(120);
        
        const animation=()=>{
            sun.rotateY(0.001);
            mercury.rotateY(0.01);
            mercuryObject.rotateY(0.005);
            
            venus.rotateY(0.007);
            venusObject.rotateY(0.0035);
            
            earth.rotateY(0.005);
            earthObject.rotateY(0.001);
            earth.rotateY(0.005);
            
            marsObject.rotateY(0.0007);
            mars.rotateY(0.004);
            
            jupiterObject.rotateY(0.0005);
            jupiter.rotateY(0.003);
            
            saturnObject.rotateY(0.00009);
            saturn.rotateY(0.003);
            
            uranusObject.rotateY(0.00009);
            uranus.rotateY(0.003);
            
            neptuneObject.rotateY(0.00009);
            neptune.rotateY(0.003);
            
            plutoObject.rotateY(0.00009);
            pluto.rotateY(0.001);
            
            
            renderer.render(scene,camera);
            orbitControls.update();
            
            
        }
        renderer.setAnimationLoop(animation)
        
        orbitControls.update();
        