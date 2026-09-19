const nav=document.querySelector('.nav');
const menu=document.querySelector('#menu');
if(menu){menu.onclick=()=>nav.classList.toggle('open');}
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const dateInput=document.querySelector('input[name="date"]');
if(dateInput){const now=new Date();const offset=now.getTimezoneOffset();const local=new Date(now.getTime()-offset*60000);dateInput.min=local.toISOString().slice(0,10);}
const form=document.querySelector('#booking');
if(form){form.onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const body=encodeURIComponent(`DEMANDE DE RÉSERVATION — CAP & TRAJET VTC\n\nNom et prénom : ${f.get('name')}\nTéléphone : ${f.get('phone')}\nE-mail : ${f.get('email')||'Non renseigné'}\nPassagers : ${f.get('passengers')}\nDate : ${f.get('date')}\nHeure : ${f.get('time')}\nDépart : ${f.get('from')}\nDestination : ${f.get('to')}\nType de trajet : ${f.get('tripType')}\nBagages : ${f.get('luggage')}\nN° de vol / train : ${f.get('reference')||'Non renseigné'}\nRetour : ${f.get('returnTrip')}\n\nMessage / précisions :\n${f.get('message')||'Aucune précision'}`);const subject=encodeURIComponent(`Demande de réservation — ${f.get('date')} ${f.get('time')} — ${f.get('name')}`);const status=document.querySelector('#status');status.className='status-ok';status.textContent='Votre demande est prête. Votre messagerie va s’ouvrir pour l’envoyer à CAP & TRAJET VTC.';window.location.href=`mailto:awassi_claude@hotmail.com?subject=${subject}&body=${body}`;};}
