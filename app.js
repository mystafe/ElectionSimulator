const express = require('express');
const app = express();
const port = 3200;

app.listen(port, () => console.log(`Mustafa Evleksiz \t Election App!`));


    let PartyAll = [];
    let partyA = [];
    let partyB = [];
    let partyC = [];
    let partyD = [];
    let tour=0;
  
    let TotalVote = 10000;
    let PartyACount = 0;
    let PartyBCount = 0;
    let PartyCCount = 0;
    let PartyDCount = 0;
    let PartyRemainig = TotalVote;
  
    const Initilization=function () {
  
      console.clear();
      for (let i =1; i <=TotalVote; i++) {
        PartyAll.push(i);
        if (i <= 4952) {
          partyA.push(i);
        }
        else if (i <= (4952+4488)) {
          partyB.push(i);
        }
        else if (i <=(4952+4488+517)) {
          partyC.push(i);
        }
        else {
          partyD.push(i);
        }
      }
      
    }
    Initilization();
  
    MyRand = function (min, max) {
      let number=Math.floor(Math.random() * (max - min + 1)) + min;
      while (PartyAll.includes(number) == false) {
        if (PartyAll.includes(number) == true) {
          return number;}
        else
          number=Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return number;
  
    }
  
    MynotRand = function (min, max) {
      let number=Math.floor(Math.random() * (max - min + 1)) + min;
      if (number>TotalVote/4) {
        number=Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      while (PartyAll.includes(number) == false) {
        if (PartyAll.includes(number) == true) {
          return number;}
        else
          number=Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return number;
    }
  
  
    let voteMe=function (vote) {
      PartyRemainig--;
      if(partyA.includes(vote))
      {
            PartyACount++;
            partyA.splice(partyA.indexOf(vote),1);
            PartyAll.splice(PartyAll.indexOf(vote),1);
      }
      else if(partyB.includes(vote))
      {
        PartyBCount++;
        partyB.splice(partyB.indexOf(vote),1);
        PartyAll.splice(PartyAll.indexOf(vote),1);
      }
      else if(partyC.includes(vote))  
      {
        PartyCCount++;
        partyC.splice(partyC.indexOf(vote),1);
        PartyAll.splice(PartyAll.indexOf(vote),1);
      }
      else if(partyD.includes(vote))
      {
        PartyDCount++;
        partyD.splice(partyD.indexOf(vote),1);
        PartyAll.splice(PartyAll.indexOf(vote),1);
      }
  
    }
  
    let StartSelection = function(param = 1) 
    {
  
      console.clear();
      console.log(".......................................................");  
      console.log("Tüm Oy Sayısı:\t\t"+ PartyAll.length +" \t=>\tTeori-1 Rastgele Olmayan Seçim");
      console.log("....................")
      console.log("Erdoğan Tüm Oy:\t\t"+ partyA.length + "\t" + (partyA.length/TotalVote*100).toFixed(2));
      console.log("Kılıçdaroğlu Tüm Oy:\t"+  partyB.length + "\t" + (partyB.length/TotalVote*100).toFixed(2));
      console.log("Sinan Oğan Tüm Oy:\t"+ partyC.length + "\t" + (partyC.length/TotalVote*100).toFixed(2));
      console.log("Muharrem İnce Tüm Oy:\t"+ partyD.length + "\t" + (partyD.length/TotalVote*100).toFixed(2));
      // console.log("_________________________________________________________");
  
      for (let i = 1; i <= TotalVote; i++) {
  
        let vote;
        if (param == 1)
        {
          vote= MyRand(1,TotalVote);
        }
        else
        {
          vote= MynotRand(1,TotalVote);
  
        }
  
        voteMe(vote);
        if (i % 1321 == 0) {
            tour++;
            console.log("\nTur:\t" + tour+ "\t\t\tAçılan Oy: % " + (i/TotalVote*100).toFixed(2) + " ");
            console.log("....................\t\t.................");
            console.log("Erdoğan:\t" + PartyACount + "\t\tOran:\t% " +  (PartyACount/(TotalVote-PartyRemainig)*100).toFixed(2)+ " ");
            console.log("Kılıçdaroğlu:\t" + PartyBCount + "\t\tOran:\t% " + (PartyBCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
            console.log("Sinan Oğan:\t" + PartyCCount + "\t\tOran:\t% " + (PartyCCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
            console.log("Muharrem İnce:\t" + PartyDCount + "\t\tOran:\t% " + (PartyDCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
            console.log("_________________________________________________________");  
          }
        else if(PartyRemainig==0){
  
          tour++;
        
          console.log("\nTur:\t" + tour+ "\t\t\tAçılan Oy: % " + (i/TotalVote*100).toFixed(2) + " ");
          console.log("_________________NİHAİ SONUÇ___________________________");
          console.log("Erdoğan:\t" + PartyACount + "\t\tOran:\t% " +  (PartyACount/(TotalVote-PartyRemainig)*100).toFixed(2)+ " ");
          console.log("Kılıçdaroğlu:\t" + PartyBCount + "\t\tOran:\t% " + (PartyBCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
          console.log("Sinan Oğan:\t" + PartyCCount + "\t\tOran:\t% " + (PartyCCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
          console.log("Muharrem İnce:\t" + PartyDCount + "\t\tOran:\t% " + (PartyDCount/(TotalVote-PartyRemainig)*100).toFixed(2) + " ");
          console.log("_________________________________________________________");
  
  
      
        }
  
      }  
    }
    console.clear();
  
    //StartSelection(1); //Rastgele Seçim
    //StartSelection(2); //Rastgele Olmayan Seçim
    
    StartSelection(2);
  
