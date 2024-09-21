let halfBtn = document.querySelector(".half-btn");
let btnInfo = document.querySelector("#btn-info");
let btnAtm = document.querySelector("#btn-atm");
let atmText = document.querySelector(".atm-text");
let planet = document.querySelector(".planet");
let infoBlock = document.querySelector(".info-block");
let btnClose = document.querySelector(".close-btn");
let btnInfoPlanet = document.querySelectorAll(".btn-info-planet");
let infoPlanet = document.querySelectorAll(".info-planet");
if(halfBtn != null){
    halfBtn.addEventListener("click", activateHulf);
    function activateHulf(e){
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            planet.classList.add("half-planet");
                if(planet.classList.contains("sun")){
                    planet.classList.add("half-sun");
                }else if(planet.classList.contains("mercury")){
                    planet.classList.add("half-mercury");
                }else if(planet.classList.contains("venus")){
                    planet.classList.add("half-venus");
                }else if(planet.classList.contains("earth")){
                    planet.classList.add("half-earth");
                }else if(planet.classList.contains("mars")){
                    planet.classList.add("half-mars");
                }else if(planet.classList.contains("jupiter")){
                    planet.classList.add("half-jupiter");
                }else if(planet.classList.contains("saturn")){
                    planet.classList.add("half-saturn");
                }else if(planet.classList.contains("uranus")){
                    planet.classList.add("half-uranus");
                }else if(planet.classList.contains("neptune")){
                    planet.classList.add("half-neptune");
                }else if(planet.classList.contains("pluto")){
                    planet.classList.add("half-pluto");
                }else if(planet.classList.contains("moon")){
                    planet.classList.add("half-moon");
                }
        }else if(!e.target.classList.contains("active")){
           if(planet.classList.contains("half-planet")){
               planet.classList.remove("half-planet");
                    if(planet.classList.contains("half-sun")){
                        planet.classList.remove("half-sun");
                    }else if(planet.classList.contains("half-mercury")){
                        planet.classList.remove("half-mercury");
                    }else if(planet.classList.contains("half-venus")){
                        planet.classList.remove("half-venus");
                    }else if(planet.classList.contains("half-earth")){
                        planet.classList.remove("half-earth");
                    }else if(planet.classList.contains("half-mars")){
                        planet.classList.remove("half-mars");
                    }else if(planet.classList.contains("half-jupiter")){
                        planet.classList.remove("half-jupiter");
                    }else if(planet.classList.contains("half-saturn")){
                        planet.classList.remove("half-saturn");
                    }else if(planet.classList.contains("half-uranus")){
                        planet.classList.remove("half-uranus");
                    }else if(planet.classList.contains("half-neptune")){
                        planet.classList.remove("half-neptune");
                    }else if(planet.classList.contains("half-pluto")){
                        planet.classList.remove("half-pluto");
                    }else if(planet.classList.contains("half-moon")){
                        planet.classList.remove("half-moon");
                    }
            }
        }
    }
};
btnInfo.addEventListener("click", activateInfo, false);
function activateInfo(e){
    infoBlock.classList.add("active-info");
};
document.addEventListener("click", closeInfo, true);
function closeInfo(e){
    if(!e.target.closest(".info-block") || e.target == btnClose){
        infoBlock.classList.remove("active-info");
    }
};
if(btnAtm != null){
    btnAtm.addEventListener("click", activateAtm);
    function activateAtm(e){
        btnAtm.classList.toggle("active");
        if(btnAtm.classList.contains("active")){
            if(btnAtm.classList.contains("btn-night")){ 
                planet.classList.add("earth-night");
                atmText.textContent="День";  
            }else{ 
                planet.classList.add("venus-atm");
                atmText.textContent="Без атмосферы";  
            } 
        }else if(!btnAtm.classList.contains("active")){
           if(planet.classList.contains("venus-atm")){
               planet.classList.remove("venus-atm");
               atmText.textContent="Атмосфера";
            }else if(planet.classList.contains("earth-night")){
               planet.classList.remove("earth-night");
               atmText.textContent="Ночь";
            }
        }
    }
};
if(btnInfoPlanet != null){
    for(i = 0; i < btnInfoPlanet.length; i++){
        let btnHover = btnInfoPlanet[i];
        let numberI = i;
        btnHover.addEventListener("mouseover", addInfoHover);
        function addInfoHover(e){ 
            infoPlanet[numberI].classList.add("info-hover");
        } 
        btnHover.addEventListener("mouseout", removeInfoHover);
        function removeInfoHover(e){ 
            infoPlanet[numberI].classList.remove("info-hover");
        }
    }
};