
document.getElementById("con1").addEventListener("click",function(){
    let desken = document.getElementById("desk");
        desken.style.display = "flex"

    let desk =document.getElementById("desk");
    desk.innerHTML = `<div class="deskcon">
        <div class="ic"><i class="fa-regular fa-window-restore"></i></div>
                <h4>Hemsidor</h4>
                <p>Professionella och prisvärda hemsidor för företag och privatpersoner som vill stärka sin digitala närvaro. Vi erbjuder 
                    skräddarsydd design och användarvänliga funktioner för att matcha dina behov. Oavsett om du driver en salong, är konsult, 
                    eller har ett mindre företag hjälper vi dig att skapa en unik och responsiv hemsida. Din webbplats representerar ditt varumärke
                    på bästa sätt och underlättar för dina kunder att hitta dig online. Vi tar hand om både front-end och back-end, så du 
                    kan fokusera på din verksamhet medan vi gör tekniken enkel och effektiv.
                </p>
                <div class="btns">
                    <button class="kons" id="#arande">Kontakta oss</button> <button class="stas">stäng</button>
                </div>
    </div>`
    document.querySelector(".kons").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"

        let arande = document.getElementById("arande");
        arande.scrollIntoView({ behavior: "smooth" });
    })

    document.querySelector(".stas").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"
    })
});

document.getElementById("con2").addEventListener("click",function(){
    let desken = document.getElementById("desk");
        desken.style.display = "flex"

    let desk =document.getElementById("desk");
    desk.innerHTML = `<div class="deskcon">
        <div class="ic"><i class="fa-solid fa-icons"></i></div>
                <h4>Logotyp</h4>
                <p>En välgjord logotyp är viktig för att skapa ett starkt första intryck och ge ditt varumärke en tydlig identitet. Den speglar
                företagets värderingar och mål, vilket hjälper potentiella kunder att omedelbart känna igen och relatera till ditt varumärke. Med rätt 
                design kan logotypen förmedla professionalism och förtroende, vilket bidrar till att bygga långsiktiga kundrelationer. 
                En unik och genomtänkt logotyp gör att ditt företag skiljer sig från konkurrenterna och stärker din position på marknaden.
                </p>
                <div class="btns">
                    <button class="kons" id="#arande">Kontakta oss</button> <button class="stas">stäng</button>
                </div>
    </div>`
    document.querySelector(".kons").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"

        let arande = document.getElementById("arande");
        arande.scrollIntoView({ behavior: "smooth" });
    })

    document.querySelector(".stas").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"
    })
});

document.getElementById("con3").addEventListener("click",function(){
    let desken = document.getElementById("desk");
        desken.style.display = "flex"

    let desk =document.getElementById("desk");
    desk.innerHTML = `<div class="deskcon">
        <div class="ic"><i class="fa-regular fa-window-restore"></i></div>
                <h4>Webbhosting</h4>
                <p>För att din hemsida ska fungera optimalt behöver du tillgång till webbhosting. Vi ansvarar inte själva för att hosta din sida men 
                hjälper gärna till att hitta en pålitlig hostingtjänst som matchar dina behov och budget. Vi kan guida dig genom olika alternativ och 
                rekommendera tjänster som erbjuder säker och stabil drift, så att din hemsida är tillgänglig och fungerar smidigt för dina besökare.
                Oavsett om du behöver enkel delad hosting eller en mer avancerad lösning, hjälper vi dig att göra ett tryggt val som stödjer din hemsidas 
                framgång.
                </p>
                <div class="btns">
                    <button class="kons" id="#arande">Kontakta oss</button> <button class="stas">stäng</button>
                </div>
    </div>`
    document.querySelector(".kons").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"

        let arande = document.getElementById("arande");
        arande.scrollIntoView({ behavior: "smooth" });
    })

    document.querySelector(".stas").addEventListener("click", function(){
        let desk = document.getElementById("desk");
        desk.style.display = "none"
    })
});