
import { useState } from "react";
import { doctorData } from "../helper/data";

const HastaEkle = ({veri,setVeri,doctorResim ,setDoctorResim }) => {

    const [showForm, setShowForm] = useState(false)
    const [choosen, setChoosen] = useState("")

  

  const doctorInfo = (doc) => {



    setDoctorResim(doctorResim.filter((x)=> x.id === doc.id))
    setVeri(veri.filter((x)=> x.doktor === doc.doctorName))
    
    setShowForm(!showForm)
    setChoosen(doc) 
    

  };

  const submitted = (e) => {
    e.preventDefault()

    setVeri()
  }

  return (
    <div>
      <h1>KLINIKUM ASHLEY</h1>

      <div className="photos">
        {doctorResim.map((doc)=> (
          <div className="doctors" key={doc.id} onClick={()=>doctorInfo(doc)}>
            <img src={doc.doctorImg} alt="" />
            <h4>{doc.doctorName}</h4>
          </div>
        ))}
        <div>
        {showForm && <form onChange={submitted}>
                <div className="formControl">
                    <label htmlFor="text">Task</label>
                    <input  type="text" id='text' />
                </div>
                <div className="formControl">
                    <label htmlFor="day">Day & Time</label>
                    <input  type="datetime-local" id='day' />
                </div>

                <button type="submit" className='btn btn-submit' >{choosen.doctorName} ICIN KAYIT OLUŞTUR</button>
            </form>}
        </div>
      </div>
    </div>
  );
};

export default HastaEkle;