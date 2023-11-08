import { React, useEffect, useState } from 'react'
import Doctordash from './Doctordash';
import axios from 'axios';
import { getLoggedUser } from '../../utils/getLoggedInUser';

const DoctorProfile= () => {
  const user = getLoggedUser()
  const [doctorsArray, setDoctorsArray] = useState([]);
  const [image, setImage] = useState({});
  const getDoctor = async (id) => {
    try {
      let { data } = await axios.get(`http://localhost:8000/doctorsUser/${id}`);
      setDoctorsArray(data);
      console.log(doctorsArray)
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    getDoctor(user._id);
  }, []);
  // /doctorsUser/:id
  

  return (
    <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-sm text-neutral-gray-dark font-h5-bold-20-26-02px">
     
      <Doctordash/>
      <div className="absolute w-[calc(100%_-_977px)] top-[158px] right-[230px] left-[747px] h-[404px] text-xl text-neutral-black">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <b className="absolute w-[calc(100%_-_48px)] top-[24px] left-[24px] tracking-[0.2px] leading-[26px] inline-block">
          Doctor Name            {"   :  "+doctorsArray.firstname+ "   " + doctorsArray.lastname}
        </b>
        <img
          className="absolute w-full top-[68px] right-[0px] left-[0px] max-w-full overflow-hidden h-[335px]"
          alt=""
          src="/table--elements--grid--large.svg"
        />
        <b className="absolute top-[86px] left-[24px] text-sm tracking-[0.1px] leading-[20px]">
          Email {"   :  "+doctorsArray.email+ "   "}
        </b>
        <div className="absolute top-[68px] left-[24px] w-[180px] h-[336px] overflow-hidden text-sm">
          <b className="absolute w-full top-[19px] left-[0px] tracking-[0.1px] leading-[20px] hidden">
            Title 
          </b>
          <div className="absolute w-full top-[74px] right-[0px] left-[0px] h-[2148px] text-neutral-gray-dark">
            <div className="absolute w-full top-[0px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Qualification  {"   :  "+doctorsArray.qualification+ "   "}
            </div>
            <div className="absolute w-full top-[56px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Specialties   {"   :  "+doctorsArray.specialties+ "   "}
            </div>
            <div className="absolute w-full top-[112px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Experience     {"   :  "+doctorsArray.experience+ "   "}
            </div>
            <div className="absolute w-full top-[168px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Active  {"   :  "+doctorsArray.Active+ "   "}
            </div>
            <div className="absolute w-full top-[224px] left-[0px] tracking-[0.1px] leading-[20px] inline-block" />
            <div className="absolute w-full top-[280px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[336px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[392px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[448px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[504px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[560px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[616px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[672px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[728px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[784px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[840px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[896px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[952px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1008px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1064px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1120px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1176px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1232px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1288px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1344px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1400px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1456px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1512px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1568px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1624px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1680px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1736px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1792px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1848px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1904px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[1960px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[2016px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[2072px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
            <div className="absolute w-full top-[2128px] left-[0px] tracking-[0.1px] leading-[20px] inline-block">
              Large
            </div>
          </div>
        </div>
        <img
          className="absolute top-[14px] left-[987px] rounded-[10px] w-[89px] h-[46px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <b className="absolute top-[25px] left-[1013px] tracking-[0.2px] leading-[26px] inline-block text-neutral-white w-[127px] h-[62px]">
          Add
        </b>
      </div>
      <img
        className="absolute top-[calc(50%_-_381px)] right-[831px] w-[258px] h-[246px]"
        alt=""
        src="/avatar--circled--man--17.svg"
      />
    </div>
  );
};

export default DoctorProfile;
