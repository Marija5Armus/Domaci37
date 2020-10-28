const ispis=document.getElementById('ispis');
const ispis2=document.querySelector('ispis2');
const wrap=document.getElementById('wrap');
const wrap2=document.getElementById('wrap2');
const dugme=document.getElementById('dugme');
var imeGrada=document.getElementById("grad");

 function ucitajPrognozu(){


 var proxyServer = 'https://proxy-requests.herokuapp.com/' // zbog CORS ogranicenja kreiramo rpoxy server
  const apiUrl = `https://www.metaweather.com/api/location/search/?query=${imeGrada.value}`;
  wrap2.innerHTML="";

  fetch(proxyServer+apiUrl)
  .then(response => response.json())
.then(data=>{
//console.log(data);
   // console.log(data.woeid);
    ispis.innerHTML=`Vremenska prognoza za ${data[0].title}, njen kod je ${data[0].woeid} `;
var a=data[0].woeid;
    
   // zbog CORS ogranicenja kreiramo rpoxy server
  const api = `https://www.metaweather.com/api/location/${a}/`;
  

  fetch(proxyServer+api)
  .then(response1 => response1.json())
.then(d=>{
 rezultat(d);
 console.log(d);
//console.log(d.woeid); not
// console.log(d[0].woeid); yes
})
.catch(error=> {console.error("Error", error)});
})
 
};

function rezultat(d){
    // if(!imeGrada.value.contains(d.title.toString())){
    //         wrap2.innerHTML="Nema rezultata za taj pojam!"
    //     }
    
 wrap2.innerHTML=`<div id="ispis2" class="row">
 <p>Grad:${d.title.toString()}</p>
            <p>Drzava:${d.parent.title.toString()} </p>
            <p>Vremenska zona:${d.timezone} </p>
            <p>Izlazak sunca:${d.sun_rise.toString()} </p>
            <p>Zalazak sunca: ${d.sun_set.toString()}</p></div>
 <div class="icon-box col">
           <p> Prognoza za <strong>danas</strong>  </p>
            <p> Datum: ${d.consolidated_weather[0].applicable_date.toString()} </p>
            <p> Prosečna temperatura:${d.consolidated_weather[0].the_temp.toFixed(1)} &#8451</p>
            <p> <img src="https://www.metaweather.com/static/img/weather/${d.consolidated_weather[0].weather_state_abbr.toString()}.svg"></img> </p>
            <p> Opis : ${d.consolidated_weather[0].weather_state_name.toString()} </p>
            <p> Maksimalna dnevna temperatura:${d.consolidated_weather[0].max_temp.toFixed(1)} </p>
            <p> Minimalna dnevna temperatura:${d.consolidated_weather[0].min_temp.toFixed(1)} </p>
            
        </div>
        <div class="icon-box col">
            <p> Prognoza za <strong>sutra</strong> </p>
            <p> Datum: ${d.consolidated_weather[1].applicable_date.toString()} </p>
            <p> Prosečna temperatura:${d.consolidated_weather[1].the_temp.toFixed(1)}&#8451 </p>
            <p> <img src="https://www.metaweather.com/static/img/weather/${d.consolidated_weather[1].weather_state_abbr.toString()}.svg"></img> </p>
            <p> Opis : ${d.consolidated_weather[1].weather_state_name.toString()} </p>
            <p> Maksimalna dnevna temperatura:${d.consolidated_weather[1].max_temp.toFixed(1)} </p>
            <p> Minimalna dnevna temperatura:${d.consolidated_weather[1].min_temp.toFixed(1)} </p>
            
        </div>
        <div class="icon-box col">
            <p> Prognoza za <strong>prekosutra</strong> </p>
            <p> Datum: ${d.consolidated_weather[2].applicable_date.toString()} </p>
            <p> Prosečna temperatura:${d.consolidated_weather[2].the_temp.toFixed(1)}&#8451 </p>
            <p> <img src="https://www.metaweather.com/static/img/weather/${d.consolidated_weather[2].weather_state_abbr.toString()}.svg"></img> </p>
            <p> Opis : ${d.consolidated_weather[2].weather_state_name.toString()} </p>
            <p> Maksimalna dnevna temperatura:${d.consolidated_weather[2].max_temp.toFixed(1)} </p>
            <p> Minimalna dnevna temperatura:${d.consolidated_weather[2].min_temp.toFixed(1)} </p>
            
        </div>
        <div class="icon-box col">
            <p> Prognoza za <strong>nakosutra</strong> </p>
            <p> Datum: ${d.consolidated_weather[3].applicable_date.toString()} </p>
            <p> Prosečna temperatura:${d.consolidated_weather[3].the_temp.toFixed(1)}&#8451 </p>
            <p> <img src="https://www.metaweather.com/static/img/weather/${d.consolidated_weather[3].weather_state_abbr.toString()}.svg"></img> </p>
            <p> Opis : ${d.consolidated_weather[3].weather_state_name.toString()} </p>
            <p> Maksimalna dnevna temperatura:${d.consolidated_weather[3].max_temp.toFixed(1)} </p>
            <p> Minimalna dnevna temperatura:${d.consolidated_weather[3].min_temp.toFixed(1)} </p>
            
        </div>
        <div class="icon-box col">
            <p> Prognoza za <strong>jakosutra</strong> </p>
            <p> Datum: ${d.consolidated_weather[4].applicable_date.toString()} </p>
            <p> Prosečna temperatura:${d.consolidated_weather[4].the_temp.toFixed(1)}&#8451 </p>
            <p> <img src="https://www.metaweather.com/static/img/weather/${d.consolidated_weather[4].weather_state_abbr.toString()}.svg"></img> </p>
            <p> Opis : ${d.consolidated_weather[4].weather_state_name.toString()} </p>
            <p> Maksimalna dnevna temperatura:${d.consolidated_weather[4].max_temp.toFixed(1)} </p>
            <p> Minimalna dnevna temperatura:${d.consolidated_weather[4].min_temp.toFixed(1)} </p>
            
        </div>`;

        switch (d.consolidated_weather[0].weather_state_abbr.toString()) {
            case "sn":  wrap.style.backgroundImage="url(snow.jpg)";
                
                break;
                case "sl": wrap.style.backgroundImage="url(assets/sleet.jpg)";
                
                break;
                case "h": wrap.style.backgroundImage="url(assets/hail.jpg)";
                
                break;
                case "t": wrap.style.backgroundImage="url(assets/thunderstorm.jpg)";
                
                break;
                case "hr": wrap.style.backgroundImage="url(assets/heavy-rain.jpg)";
                
                break;
                case "lr": wrap.style.backgroundImage="url(assets/light-rain.jpg)";
                
                break;
                case "s": wrap.style.backgroundImage="url(assets/showers.jpg)";
                
                break;
                case "hc": wrap.style.backgroundImage="url(assets/heavy-cloud.jpg)";
                
                break;
                case "lc": wrap.style.backgroundImage="url(assets/light-cloud.jpg)";
                
                break;
                case "c": wrap.style.backgroundImage="url(assets/beautiful-sunny-weather--green_1366x768.png)";
                
                break;

        
            default:wrap.style.backgroundImage="url(assets/beautiful-sunny-weather--green_1366x768.png)";
                break;
        }
}


// dugme.addEventListener('click', ucitajPrognozu);

imeGrada.addEventListener('focus', function(){  
    imeGrada.value="";
  });
imeGrada.addEventListener('input', ucitajPrognozu);