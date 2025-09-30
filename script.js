
// mobile nav
const toggle=document.querySelector('.nav-toggle'),menu=document.querySelector('#menu');
toggle&&menu&&toggle.addEventListener('click',()=>{const e=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',e?'true':'false')});

// reveal on scroll
const io=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add('visible'),io.unobserve(e.target))})},{threshold:.18});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// KPI counter
function animateCounter(e){const t=+e.dataset.target,n=Math.max(1,Math.floor(t/60));let o=0;const r=setInterval(()=>{(o+=n)>=t&&(o=t,clearInterval(r)),e.textContent=o.toLocaleString()},20)}
document.querySelectorAll('.stat').forEach(animateCounter);

// ROI calculator
function calcROI(){
  const team=+document.getElementById('roi-team').value||0;
  const tickets=+document.getElementById('roi-tickets').value||0;
  const aht=+document.getElementById('roi-aht').value||0;
  const rate=+document.getElementById('roi-rate').value||0;
  const automations=+document.getElementById('roi-count').value||1;
  const savedHoursPerDay=(tickets*aht/60)*0.6; // assume 60% automation
  const savedHoursPerMonth=savedHoursPerDay*22;
  const costSaved=Math.round(savedHoursPerMonth*rate);
  const setup = automations===1?1000:(automations<=5?2200:0);
  const monthly = automations===1?300:(automations<=5?750:0);
  document.getElementById('roi-hours').textContent=Math.round(savedHoursPerMonth).toLocaleString();
  document.getElementById('roi-savings').textContent=costSaved.toLocaleString();
  document.getElementById('roi-monthly').textContent=monthly.toLocaleString();
  const payback = setup>0 ? Math.max(1, Math.ceil(setup / Math.max(1,costSaved-monthly))) : 1;
  document.getElementById('roi-payback').textContent = isFinite(payback)? payback : '—';
}
document.getElementById('roi-form')?.addEventListener('input', calcROI);
calcROI();


// Enhance FAQ: smooth scroll into view on open
(function(){
  document.querySelectorAll('.faq-item > summary').forEach((s) => {
    s.addEventListener('click', function(){
      const parent = this.parentElement;
      setTimeout(() => {
        try { parent.scrollIntoView({behavior:'smooth', block:'nearest'}); } catch(e) {}
      }, 120);
    });
  });
})();


// Enhance FAQ: smooth scroll into view on open
(function(){
  const sums = document.querySelectorAll('.faq-item > summary');
  if (!sums.length) return;
  sums.forEach((s) => {
    s.addEventListener('click', function(){
      const parent = this.parentElement;
      setTimeout(() => {
        try { parent.scrollIntoView({behavior:'smooth', block:'nearest'}); } catch(e) {}
      }, 120);
    });
  });
})();


// Smooth mobile nav UX: close on link click
(function(){
  try{
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.nav-toggle');
    if(menu && toggle){
      menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }));
      // Close when clicking outside
      document.addEventListener('click',(e)=>{
        if(!menu.contains(e.target) && !toggle.contains(e.target)){
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded','false');
        }
      });
    }
  }catch(_){}
})();
