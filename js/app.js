// ✏️ PERSONALIZA AQUÍ
const NOMBRE = "Jacquii";            // ejemplo: "Ana"
const FIRMA  = "alguien que piensa en ti"; // ejemplo: "Carlos"
document.getElementById('nombre').textContent = NOMBRE;
document.getElementById('nombre2').textContent = NOMBRE === "tú" ? "ti" : NOMBRE;
document.getElementById('firma').textContent = FIRMA;

// pétalos cayendo
const em = ['🌸','🌷','🌼','💮','🌺'];
for (let i=0;i<16;i++){const p=document.createElement('div');p.className='petal';p.textContent=em[i%em.length];
p.style.left=Math.random()*100+'vw';p.style.fontSize=(14+Math.random()*14)+'px';
p.style.animationDuration=(7+Math.random()*8)+'s';p.style.animationDelay=(-Math.random()*12)+'s';document.body.appendChild(p);}

// flores del jardín
const cols=['#ff7fa8','#ffd166','#ffffff','#c79bff','#ff9a76'];
const g=document.getElementById('garden');
const n=Math.max(6,Math.min(12,Math.floor(innerWidth/70)));
for(let i=0;i<n;i++){
  const c=cols[i%cols.length], f=document.createElement('div');
  f.className='fl';f.style.left=(3+i*(94/n))+'%';f.style.setProperty('--h',(30+Math.random()*50)+'px');
  f.style.animationDelay=(i*0.18)+'s, '+(i*0.3)+'s';
  let pet='';for(let k=0;k<6;k++)pet+=`<ellipse cx="23" cy="9" rx="7" ry="10" fill="${c}" stroke="rgba(0,0,0,.12)" transform="rotate(${k*60} 23 23)"/>`;
  f.innerHTML=`<svg viewBox="0 0 46 46">${pet}<circle cx="23" cy="23" r="6" fill="#ffb703"/></svg><span class="stem"></span>`;
  g.appendChild(f);
}

// perrito y chico: corazoncitos al tocar
document.getElementById('pup').addEventListener('click',e=>{
  for(let i=0;i<4;i++){const h=document.createElement('div');h.className='heart';h.textContent='💗';
  h.style.left=(20+Math.random()*60)+'%';h.style.top=(Math.random()*30)+'%';h.style.animationDelay=(i*.15)+'s';
  e.currentTarget.appendChild(h);setTimeout(()=>h.remove(),2200);}
});

// carta
const env=document.getElementById('env'),letter=document.getElementById('letter');
env.addEventListener('click',()=>{
  env.classList.add('open');
  setTimeout(()=>{letter.classList.add('show');
    letter.querySelectorAll('p.l').forEach((p,i)=>p.style.animationDelay=(0.6+i*0.9)+'s');},700);
});
document.getElementById('cerrar').addEventListener('click',()=>{letter.classList.remove('show');env.classList.remove('open');});

// 🐈‍⬛ gatito negro: llega caminando con el regalo, se sienta y aparece el botón
const intro=document.getElementById('intro'), catwrap=document.getElementById('catwrap'),
      walker=document.getElementById('walker'), startBtn=document.getElementById('start'),
      scene=document.getElementById('scene'), pupEl=document.getElementById('pup'),
      hintEl=document.querySelector('.hint');
let sentado=false, iniciado=false;
function sentarse(){
  if(sentado) return; sentado=true;
  catwrap.classList.add('sit');
  setTimeout(()=>startBtn.classList.add('show'),900);
}
walker.addEventListener('animationend',e=>{ if(e.animationName==='walkin') sentarse(); });
setTimeout(sentarse,5800); // respaldo por si el navegador no dispara animationend

// al iniciar: el gatito se va y aparecen el perrito, el chico tímido y la carta
startBtn.addEventListener('click',()=>{
  if(iniciado) return; iniciado=true;
  startBtn.classList.remove('show'); startBtn.disabled=true;
  catwrap.classList.remove('sit'); catwrap.classList.add('leave');
  setTimeout(mostrarEscena,1500);
});
function mostrarEscena(){
  intro.hidden=true; scene.hidden=false;
  setTimeout(()=>pupEl.classList.add('boy-in'),900);                       // aparece el chico
  setTimeout(()=>{ env.classList.add('show'); hintEl.classList.add('show'); },3000); // aparece la carta
}
