import{r as n,u as m,_ as l,M as p,s as i,j as e,C as h,O as v}from"./index-c88cd57d.js";var u=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class y extends p{constructor(t={}){super(t),this.setValues(t),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(t){t.uniforms.time=this._time,t.uniforms.radius=this._radius,t.uniforms.distort=this._distort,t.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${u}
      ${t.vertexShader}
    `,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(t){this._time.value=t}get distort(){return this._distort.value}set distort(t){this._distort.value=t}get radius(){return this._radius.value}set radius(t){this._radius.value=t}}const g=n.forwardRef(({speed:r=1,...t},o)=>{const[s]=n.useState(()=>new y);return m(a=>s&&(s.time=a.clock.getElapsedTime()*r)),n.createElement("primitive",l({object:s,ref:o,attach:"material"},t))});function f(r){const t=r+"Geometry";return n.forwardRef(({args:o,children:s,...a},d)=>n.createElement("mesh",l({ref:d},a),n.createElement(t,{attach:"geometry",args:o}),s))}const w=f("sphere"),j=i.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    height: 115vh;
  }
`,z=i.div`
  margin-top: 50px;
  height: 100%;
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`,_=i.div`
  flex: 1;
  position: relative;
  height: 700px;
  @media only screen and (max-width: 769px) {
   height: 100px;
   width: 60%;
   padding: 0;
  }
`,b=i.h1`
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  @media only screen and (max-width: 769px) {
    font-size: 15px;
  }
`,I=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 769px) {
    align-items: center;
    text-align: center;
    gap: 5px;
    transform: translateY(-50px);
  }
`,S=i.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 769px) {
    gap: 5px;
  }
`,k=i.img`
  height: 2px;
`,M=i.h2`
  color: #08f1a4;
  font-size: 17px;

  @media only screen and (max-width: 769px) {
    font-size: 12px;
  }
`,C=i.p`
  font-size: 15px;

  @media only screen and (max-width: 769px) {
    font-size: 11px;
  }
`,D=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,c=i.img`
  width: 40px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;

  @media only screen and (max-width: 769px) {
    width: 30px;
  }
`,x=i.a`
  width: 40px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  transition: all 0.5s ease;
`,L=i.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  position: absolute;

  animation: ImgAnimation 2s infinite ease alternate;

  @keyframes ImgAnimation {
    100% {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 769px) {
    width: 150px;
    height: 150px;
  }
`,E=()=>e.jsx(j,{id:"about",children:e.jsxs(z,{children:[e.jsxs(_,{children:[e.jsxs(h,{children:[e.jsx(v,{enableZoom:!1}),e.jsx("ambientLight",{intensity:.1}),e.jsx("directionalLight",{position:[2,3,1]}),e.jsx(w,{args:[1,100,200],scale:2,children:e.jsx(g,{color:"#08f1a4",attach:"material",distort:.5,speed:2})})]}),e.jsx(L,{src:"./img/spaceman.png"})]}),e.jsxs(I,{children:[e.jsx(b,{children:'"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler'}),e.jsxs(S,{children:[e.jsx(k,{src:"./img/line.png"}),e.jsx(M,{children:"About Me"})]}),e.jsx(C,{children:"I am a driven software developer with 1 year of experience and a diverse skill set in Python, Java, JavaScript, Git, HTML/CSS, Bootstrap, React, Nodejs, OOP, SQLite, PostgreSql, Kotlin, Spring boot and TDD. In my previous role as a technical mentor at WeThinkCode_, I successfully guided and mentored first-year students. My strengths include problem-solving, teamwork, leadership, mentoring, conflict resolution, customer service, marketing, and sales. I am dedicated to continuous learning and growth and seek new opportunities in a dynamic and challenging environment. I am open to discussing software development opportunities."}),e.jsxs(D,{children:[e.jsx(x,{href:"https://www.linkedin.com/in/mekhail-meiring-26a284223/",target:"_blank",children:e.jsx(c,{src:"./img/icons/linkedin.png"})}),e.jsx(x,{href:"https://www.instagram.com/_mekhail_meiring_/",target:"_blank",children:e.jsx(c,{src:"./img/icons/instagram.png"})}),e.jsx(x,{href:"https://github.com/Mekhail-Meiring",target:"_blank",children:e.jsx(c,{src:"./img/icons/github.png"})})]})]})]})});export{E as default};
