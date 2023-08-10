import React from 'react';

import './organisation.css';

const boardMembers = [
  {
    "name": "Mogens Hugo",
    "title": "Formand",
    "qualifications": ["Cand, polyt. MBA"],
    "joinedBoard": "29.10.2001",
    "born": "1943",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "Operationel og strategisk ledelse, børsnoterede internationale koncerner, strategiudvikling, finans, investering, risikostyring, stor bestyrelseserfaring i industri- og finansvirksomheder og fonde",
    "otherPositions": "Formand for bestyrelsen i Dan Technologies A/S, Capidea Management A/S, Teater Mungo Park – Allerød, Teater Mungo Park – Kolding, Næstformand i Institutionen Dr. Dante – Mungo, Bestyrelsesmedlem i Ejendommen Østre Gasværk (fond), Direktør i Hugo Invest II ApS",
  },
  {
    "name": "Finn Junge-Jensen",
    "qualifications": ["MBA, fhv. rektor på CBS"],
    "joinedBoard": "29.10.2001",
    "born": "1944",
    "lastElected": "2021",
    "termExpiry": "2023",
    "specialSkills": "Strategy and management, extensive board experience from private companies, public institutions, and foundations",
    "otherPositions": "Member of the boards: Politiken-Fonden, Boligfonden for internationale studerende og gæsteforskere ved Handelshøjskolen i København, Vedbygaard Rekonvalescenthjem, A/S Politiken Holding, Fonden Tietgenkollegiet, Diakonissestiftelsen, Klitgården Fond, Ordrupgaard, advisory board member"
  },
  {
    "name": "Per Holten-Andersen",
    "qualifications": ["Cand. Silv., HD, PhD", "Rektor for Den Kgl. Veterinær og Landbohøjskole (KVL) 2002-2006", "Rektor for CBS 2012-2019"],
    "joinedBoard": "24.10.2019",
    "born": "1952",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "Strategi og ledelse, omfattende bestyrelseserfaring fra private virksomheder, offentlige institutioner og fonde.",
    "otherPositions": "Medlem af bestyrelserne: Politiken-Fonden, Boligfonden for internationale studerende og gæsteforskere ved Handelshøjskolen i København, Vedbygaard Rekonvalescenthjem, A/S Politiken Holding, Fonden Tietgenkollegiet, Diakonissestiftelsen, Klitgården Fond, Ordrupgaard, advisory board medlem",

  },
  {
    "name": "Birgitte Høier",
    "qualifications": ["Dr. Ph.D, Adjunkt", "Institut for Idræt og Ernæring", "Københavns universitet"],
    "joinedBoard": "12.4.2016",
    "born": "1970",
    "lastElected": "2022",
    "termExpiry": "2023",
    "specialSkills": "National og international forskningserfaring med fokus på effekt af fysisk træning på det kardiovaskulære system i raske unge og ældre samt i kardiovaskulære sygdomme, projektledelses erfaring fra humane forskningsprojekter, medvejleder for bachelor, kandidat og Ph.D studerende, indsigt i studieforhold for universitetsstuderende på alle niveauer",
    "otherPositions": "Suppleant for Ph.D-studerende ved Københavns Universitet i bestyrelsen for Research Education Program in Sport Sciences (REPS), Danmark, 2010-2013.Medstifter og formand for bestyrelsen i nystiftet andelsboligforening Nørrebrogade 190/Ægirsgade 1, København N, Danmark, 2003-2006. Bestyrelsesmedlem og formand i vuggestuen,Rådmandsgade 1, København N., børnehaven Ragnarok, København Ø og i Kollegiegårdens vuggestue, København N, 2001-2008."
  },
  {
    "name": "Jens Frydenvang",
    "qualifications": ["Ph.D., Cand.Scient.", "Adjunkt på Københavns Universitet"],
    "joinedBoard": "22.04.2020",
    "born": "1986",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "Blandt de første beboere der flyttede ind på Tietgenkollegiet og bidrog bredt til opstart af beboer-grupper, herunder Kollegierådet og som formand for dette gennem flere år. Forsker ved Københavns Universitet med direkte involvering NASA’s Mars Science Laboratory og Mars 2020 missionerne der udforsker Mars med Curiosity og (fra februar 2021) Perseverance roverne. Omfattende indsigt i dansk og international forskning og arbejder direkte med universitetsstuderende. Stor erfaring med udbredelse af videnskabelige resultater fra vores udforskning af Mars til alle aldersgrupper.",
    "otherPositions": "Mangeårigt medlem i bestyrelsen i Ejerforeningen Ved Sønderport 14-24. Medstifter af SpectraCrop Aps."
  }
]

const Organisation = () => {
  return (
    <div className="app__organisation" >
      <h1>Organisation</h1>

      <p className="app__organisation-desc">Tietgenkollegiet er blevet til på baggrund af en donation fra Nordea-fonden. På grund af donationens og kollegiets størrelse blev det besluttet at skabe et selvstændigt organ, Fonden Tietgenkollegiet, til at varetage kollegiets opførelse og drift.</p>
      <p className="app__organisation-desc">Tietgenkollegiets daglige administration og drift varetages af kollegiets administrationsdeling med et nedsat kollegieråd bestående af beboere som sparringspartner.</p>

      <h2 className="app__organisation-title">Bestyrelsen</h2>

      <div className="app__organisation-board">

        {boardMembers.map((member, index) => (
          <div className={`app__organisation-board-item`}>
            <div className="app__organisation-board-item_bottom">
              <div className="app__organisation-board-item_bottom_left">
                <h2 className="board-name">{member.name} {member.title && <p className="whitetag">{member.title}</p>}</h2>
                <span className="rtag">
                {member.qualifications.map((qualification) => (
                  <p>{qualification}</p>
                ))} 
                <br/>
                <span className="bold">
                <p>Født: {member.born}</p>
                <p>Indtrådt Dato: {member.joinedBoard}</p>
                <p>Sidst Valgt: {member.lastElected}</p>
                <p>Udløb Periode: {member.termExpiry}</p>
                </span>
                </span>
              </div>
              
              <div className="app__organisation-board-item_bottom_right">
                <div className="app__organisation-board-item_bottom_right_top">
                  <h2>Særlige kompetencer</h2>
                  <p>{member.specialSkills}</p>
                </div>

                <div className="app__organisation-board-item_bottom_right_bottom">
                  <h2>Øvrige hverv</h2>
                  <p>{member.otherPositions}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>


    </div>
  );
}

export default Organisation;
