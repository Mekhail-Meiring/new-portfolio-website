import{r as l,a as h,A as j,u as f,b as r,j as e,C as d,O as u,S as g,s as i}from"./index-bac6e95f.js";function y(o,n){const t=l.useRef(),[a]=l.useState(()=>n?n instanceof h?{current:n}:n:t),[c]=l.useState(()=>new j(void 0)),x=l.useRef({}),[p]=l.useState(()=>{const m={};return o.forEach(s=>Object.defineProperty(m,s.name,{enumerable:!0,get(){if(a.current)return x.current[s.name]||(x.current[s.name]=c.clipAction(s,a.current))}})),{ref:a,clips:o,actions:m,names:o.map(s=>s.name),mixer:c}});return f((m,s)=>c.update(s)),l.useEffect(()=>{const m=a.current;return()=>{x.current={},Object.values(p.actions).forEach(s=>{m&&c.uncacheAction(s,m)})}},[o]),l.useEffect(()=>()=>{c.stopAllAction()},[c]),p}function b(o){const n=l.useRef(),{nodes:t,materials:a,animations:c}=r("./models/java-logo-transformed.glb");return y(c,n),e.jsx("group",{ref:n,...o,dispose:null,children:e.jsx("group",{name:"Sketchfab_Scene",children:e.jsx("group",{name:"Sketchfab_model",rotation:[-Math.PI/2,0,0],children:e.jsxs("group",{name:"Root",children:[e.jsx("group",{name:"Cube",children:e.jsx("mesh",{name:"Cube_0",geometry:t.Cube_0.geometry,material:a.Material})}),e.jsx("group",{name:"Plane",position:[.79,0,0],rotation:[Math.PI/2,0,0],children:e.jsx("mesh",{name:"Plane_0",geometry:t.Plane_0.geometry,material:a.Material})}),e.jsx("group",{name:"Plane001",position:[0,0,1.52],rotation:[Math.PI/2,0,0],scale:1.22,children:e.jsx("mesh",{name:"Plane001_0",geometry:t.Plane001_0.geometry,material:a["Material.002"],morphTargetDictionary:t.Plane001_0.morphTargetDictionary,morphTargetInfluences:t.Plane001_0.morphTargetInfluences})}),e.jsx("group",{name:"Torus001",position:[-.14,-.06,-.77],rotation:[-.14,-.02,.1],scale:[.47,.43,.43],children:e.jsx("mesh",{name:"Torus001_0",geometry:t.Torus001_0.geometry,material:a.Material})}),e.jsx("group",{name:"Torus000",position:[.1,-.03,-.88],rotation:[-.13,-.05,.1],scale:[.45,.42,.3],children:e.jsx("mesh",{name:"Torus000_0",geometry:t.Torus000_0.geometry,material:a.Material})})]})})})})}r.preload("./models/java-logo-transformed.glb");const v=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(b,{})})]});function M(o){const{nodes:n,materials:t}=r("./models/javascript-transformed.glb");return e.jsx("group",{...o,dispose:null,children:e.jsx("mesh",{geometry:n.Curve.geometry,material:t["SVGMat.017"],position:[-73.2,0,0],rotation:[1.57,0,0],scale:11366.62,children:e.jsx("mesh",{geometry:n.Curve001.geometry,material:t["SVGMat.018"]})})})}r.preload("./models/javascript-transformed.glb");const C=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(M,{})})]});function S(o){const{nodes:n,materials:t}=r("./models/kotlin-transformed.glb");return e.jsx("group",{...o,dispose:null,children:e.jsxs("mesh",{geometry:n.Curve011.geometry,material:t["SVGMat.013"],position:[-4.74,-1.28,.8],rotation:[1.57,.02,-.01],scale:742.92,children:[e.jsx("mesh",{geometry:n.Curve.geometry,material:t["SVGMat.002"]}),e.jsx("mesh",{geometry:n.Curve001.geometry,material:t["SVGMat.003"]})]})})}r.preload("./models/kotlin-transformed.glb");const P=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(S,{})})]});function R(o){const{nodes:n,materials:t}=r("./models/python-logo-transformed.glb");return e.jsxs("group",{...o,dispose:null,children:[e.jsx("mesh",{geometry:n.Object_4.geometry,material:t.material,rotation:[Math.PI/2,0,0],scale:2.5}),e.jsx("mesh",{geometry:n.Object_6.geometry,material:t[".001"],rotation:[-Math.PI/2,0,-Math.PI],scale:2.5})]})}r.preload("./models/python-logo-transformed.glb");const _=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(R,{})})]});function k(o){const{nodes:n,materials:t}=r("./models/react-logo-transformed.glb");return e.jsx("group",{...o,dispose:null,children:e.jsx("group",{scale:.01,children:e.jsx("mesh",{geometry:n["React-Logo_Material002_0"].geometry,material:t["Material.002"],position:[0,7.94,18.1],rotation:[0,0,-Math.PI/2],scale:[39.17,39.17,52.73]})})})}r.preload("./models/react-logo-transformed.glb");const I=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(k,{})})]});function T(o){const{nodes:n,materials:t}=r("./models/spring-boot-transformed.glb");return e.jsx("group",{...o,dispose:null,children:e.jsx("mesh",{geometry:n.Curve.geometry,material:t["SVGMat.001"],position:[-6.18,0,0],rotation:[-1.58,0,-3.14],scale:-982.47,children:e.jsx("mesh",{geometry:n.Curve001.geometry,material:t["SVGMat.002"]})})})}r.preload("./models/spring-boot-transformed.glb");const w=()=>e.jsxs(d,{children:[e.jsx(u,{enableZoom:!1,autoRotate:!0}),e.jsx(g,{environment:"city",intensity:0,adjustCamera:1.7,children:e.jsx(T,{})})]}),A=[{id:1,icon:"./img/icons/python.png",title:"Python"},{id:2,icon:"./img/icons/java.png",title:"Java"},{id:3,icon:"./img/icons/javascript.png",title:"Javascript"},{id:4,icon:"./img/icons/kotlin.png",title:"Kotlin"},{id:5,icon:"./img/icons/react.png",title:"React"},{id:6,icon:"./img/icons/springboot.png",title:"Springboot"}],G=i.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  text-align: center;
`,O=i.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-40px);
  @media only screen and (max-width: 769px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`,V=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 150px;
  
`,E=i.ul`

  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`,J=i.li`

  display: flex;
  align-items: center;
  gap: 20px;

  
`,Z=i.div`
  flex: 1;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;i.div`
    
`;const L=i.img`
    width: 40px;
    cursor: pointer;

    animation: animateIcon 2s infinite ease-in-out alternate;

    @keyframes animateIcon {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      50% { transform: rotate(0eg); }
      75% { transform: rotate(-5deg); }
      100% { transform: rotate(0deg); }
    }
`,$=i.div`

  position: relative;

  font-weight: bold;
  font-size: 25px;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  cursor: pointer;

  animation: colorChange 2s infinite ease-in-out alternate;

  @keyframes colorChange {
    100% {
      color: #08f1a4;
    }
  }

  :hover {
    transform: translateX(10px);
  }
  transition: all 0.5s ease;

`,W=i.h1`
  display: inline-block;
  transform: translateY(70px);
  position: relative;
  font-size: 50px;
  font-weight: lighter;
  margin: 0;
  padding: 0;
`,D=()=>{const[o,n]=l.useState("Python");return e.jsxs(G,{id:"skills",children:[e.jsx(W,{children:"Skills"}),e.jsxs(O,{children:[e.jsx(V,{children:e.jsx(E,{children:A.map(t=>e.jsxs(J,{onClick:()=>{n(t.title)},children:[e.jsx(L,{src:t.icon}),e.jsx($,{text:t.title,children:t.title})]},t.id))})}),e.jsx(Z,{children:o==="Python"?e.jsx(_,{}):o==="Java"?e.jsx(v,{}):o==="Javascript"?e.jsx(C,{}):o==="Kotlin"?e.jsx(P,{}):o==="React"?e.jsx(I,{}):e.jsx(w,{})})]})]})};export{D as default};
