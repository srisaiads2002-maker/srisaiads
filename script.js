
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'×':'☰';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.textContent='☰';toggle.setAttribute('aria-expanded','false')}));
}
document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('leadForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=new FormData(form);
    const text=[
      'Hello Sri Sai Ads,',
      'I would like to plan an advertising campaign.',
      '',
      'Name: '+(data.get('name')||''),
      'Phone: '+(data.get('phone')||''),
      'City / Area: '+(data.get('city')||''),
      'Media: '+(data.get('media')||''),
      'Requirement: '+(data.get('message')||'')
    ].join('\n');
    window.open('https://wa.me/918099380999?text='+encodeURIComponent(text),'_blank');
  });
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('reveal-in');observer.unobserve(entry.target)}
  });
},{threshold:.12});
document.querySelectorAll('.media-card,.feature-grid article,.steps article,.portfolio-grid figure').forEach(el=>{
  el.classList.add('reveal');observer.observe(el);
});
