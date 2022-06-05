import React, {Component} from 'react';

function DetailMission() {
    return (

        <div className='MissionAssoDetail'>

            <h1 className='TitreMiss'>Professeur de soutien en programmation</h1>
            <label className='DureeMiss'>Durée : </label>
            <p>3 semaines</p>
            <label className='LieuMiss'>Lieu : </label>
            <p>Salary</p>
            <label className='ThemeMiss'>Thèmes : </label>
            <p>Programmation, Education</p>
            <label className='Descrip'>Description : </label>
            <p>Cette mission consiste à aider les adolescents qui ont des difficultés en programmation.</p>

            <form>
                <div className='Dispo'>

                    <label className='TrancheDispo'>Disponibilité : du </label>
                    <input type="text" placeholder="Entrez une date de début" className="DateDébut"  />
                    <label className='TrancheDispo2'> au </label>
                    <input type="text" placeholder="Entrez une date de fin" className="DateFin"  />

                </div>
            </form>

            <input className='btnQuest' type="submit" value="Realiser le test " />
            <input className='btnPostu' type="submit" value="Postuler " />

        </div>
    )
}

export default DetailMission;