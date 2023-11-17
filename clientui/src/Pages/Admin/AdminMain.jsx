import { React } from 'react'
import AdminDash from './AdminDash';
import { Button } from '../../Components/Button';

function AdminMain() {
  return (
    <div className="relative bg-neutral-white w-full h-[1024px] overflow-hidden text-left text-lg text-primary-default font-small-3-bold-10-12-02px">
      
      
        <AdminDash/>


      <div className="absolute w-[calc(100%_-_1185px)] top-[113px] right-[893px] left-[292px] h-[88px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <img
          className="absolute top-[calc(50%_-_20px)] left-[24px] w-10 h-10 overflow-hidden"
          alt=""
          src="/icon--icofont--medical--cross--first-aid.svg"
        />
        <div className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_0px)] left-[88px] tracking-[0.1px] leading-[24px] flex items-center h-6">
          213
        </div>
        <b className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_24px)] left-[88px] text-sm tracking-[0.1px] leading-[20px] flex text-neutral-black items-center h-5">
          Appointments
        </b>
      </div>

      <div className="absolute w-[calc(100%_-_1185px)] top-[118px] right-[599px] left-[586px] h-[88px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <img
          className="absolute top-[calc(50%_-_20px)] left-[24px] w-10 h-10 overflow-hidden"
          alt=""
          src="/icon--icofont--medical--human--crutch.svg"
        />
        <div className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_0px)] left-[88px] tracking-[0.1px] leading-[24px] flex items-center h-6">
          104
        </div>
        <b className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_24px)] left-[88px] text-sm tracking-[0.1px] leading-[20px] flex text-neutral-black items-center h-5">
          Doctors
        </b>
      </div>
      <div className="absolute w-[calc(100%_-_1185px)] top-[120px] right-[305px] left-[880px] h-[88px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <img
          className="absolute top-[calc(50%_-_20px)] left-[24px] w-10 h-10 overflow-hidden"
          alt=""
          src="/icon--icofont--medical--human--crutch.svg"
        />
        <div className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_0px)] left-[88px] tracking-[0.1px] leading-[24px] flex items-center h-6">
          104
        </div>
        <b className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_24px)] left-[88px] text-sm tracking-[0.1px] leading-[20px] flex text-neutral-black items-center h-5">
          Patients
        </b>
      </div>
      <div className="absolute w-[calc(100%_-_1185px)] top-[120px] right-[11px] left-[1174px] h-[88px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <img
          className="absolute top-[calc(50%_-_20px)] left-[24px] w-10 h-10 overflow-hidden"
          alt=""
          src="/icon--icofont--medical--human--crutch.svg"
        />
        <div className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_0px)] left-[88px] tracking-[0.1px] leading-[24px] flex items-center h-6">
          104
        </div>
        <b className="absolute w-[calc(100%_-_112px)] top-[calc(50%_-_24px)] left-[88px] text-sm tracking-[0.1px] leading-[20px] flex text-neutral-black items-center h-5">{`Staff `}</b>
      </div>
      <div className="absolute w-[calc(100%_-_316px)] top-[270px] right-[11px] left-[305px] h-[374px] text-right text-3xs text-neutral-gray-light">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
        </div>
        <b className="absolute top-[80px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          300
        </b>
        <b className="absolute top-[120px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          250
        </b>
        <b className="absolute top-[160px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          200
        </b>
        <b className="absolute top-[200px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          150
        </b>
        <b className="absolute top-[240px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          100
        </b>
        <b className="absolute top-[280px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          50
        </b>
        <b className="absolute top-[320px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-5 h-3">
          0
        </b>
        <img
          className="absolute w-[calc(100%_-_75px)] top-[85.5px] right-[23.5px] left-[51.5px] max-w-full overflow-hidden h-[241px]"
          alt=""
          src="/dividers.svg"
        />
        <div className="absolute top-[29px] right-[24px] w-[104px] h-4 text-left text-xs text-neutral-gray">
          <b className="absolute top-[0px] right-[0px] tracking-[0.1px] leading-[16px]">
            Patients 2020
          </b>
          <img
            className="absolute top-[7px] right-[83px] w-[22px] h-0.5"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div className="absolute top-[29px] right-[176px] w-[104px] h-4 text-left text-xs text-neutral-gray">
          <img
            className="absolute top-[7px] right-[83px] w-[22px] h-0.5"
            alt=""
            src="/vector-2.svg"
          />
          <b className="absolute top-[0px] right-[0px] tracking-[0.1px] leading-[16px]">
            Patients 2019
          </b>
        </div>
        <b className="absolute top-[24px] left-[24px] text-xl tracking-[0.2px] leading-[26px] text-neutral-black text-left">
          Hospital Survey
        </b>
        <img
          className="absolute w-[calc(100%_-_140px)] top-[129px] right-[53px] left-[87px] max-w-full overflow-hidden h-[196.5px]"
          alt=""
          src="/graphics.svg"
        />
        <div className="absolute w-[calc(100%_-_94px)] top-[326px] right-[30px] left-[64px] h-6 text-center">
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[981px] left-[0px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-1
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_980px)] top-[0px] right-[891px] left-[89px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-2
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[802px] left-[179px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-3
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_982px)] top-[0px] right-[714px] left-[268px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-4
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_980px)] top-[0px] right-[624px] left-[356px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-5
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[535px] left-[446px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-6
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[446px] left-[535px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-7
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_980px)] top-[0px] right-[356px] left-[624px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-8
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[267px] left-[714px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-9
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_982px)] top-[0px] right-[179px] left-[803px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-10
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_980px)] top-[0px] right-[89px] left-[891px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-11
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0.5px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[0px] right-[0px] left-[981px] h-6 overflow-hidden">
            <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
              2020-12
            </b>
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
              alt=""
              src="/data-pointer.svg"
            />
          </div>
          <div className="absolute w-[calc(100%_-_981px)] top-[-240px] right-[446px] left-[535px] h-[239px] text-xs text-primary-default">
            <img
              className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-[239px]"
              alt=""
              src="/pointer.svg"
            />
            <div className="absolute top-[85px] left-[calc(50%_-_3.5px)] rounded-[50%] bg-neutral-white shadow-[0px_1px_2px_rgba(16,_30,_115,_0.2)] box-border w-2 h-2 border-[1.5px] border-solid border-primary-default" />
            <img
              className="absolute top-[89.98px] left-[calc(50%_-_3.5px)] w-4 h-[16.02px]"
              alt=""
              src="/cursor--pointing-hand.svg"
            />
            <div className="absolute top-[45px] left-[calc(50%_-_31.5px)] w-16 h-7">
              <img
                className="relative w-20 h-[47.78px]"
                alt=""
                src="/sheet.svg"
              />
              <b className="absolute h-[calc(100%_-_8px)] w-[calc(100%_-_8px)] top-[4px] left-[4px] tracking-[0.1px] leading-[16px] flex items-center justify-center">
                180
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_308px)] top-[697px] right-[3px] left-[305px] h-[286px] text-right text-3xs text-neutral-gray">
        <div className="absolute w-[calc(100%_-_581px)] top-[0px] right-[581px] left-[0px] h-[286px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
          </div>
          <b className="absolute top-[72px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $100,000
          </b>
          <b className="absolute top-[104px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $80,000
          </b>
          <b className="absolute top-[136px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $60,000
          </b>
          <b className="absolute top-[168px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $40,000
          </b>
          <b className="absolute top-[200px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $20,000
          </b>
          <b className="absolute top-[232px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $0
          </b>
          <img
            className="absolute w-[calc(100%_-_105px)] top-[77.5px] right-[23.5px] left-[81.5px] max-w-full overflow-hidden h-[161px]"
            alt=""
            src="/dividers1.svg"
          />
          <b className="absolute top-[33px] right-[24px] text-xs tracking-[0.1px] leading-[16px]">
            Income in current month
          </b>
          <b className="absolute top-[24px] left-[24px] text-xl tracking-[0.2px] leading-[26px] text-neutral-black text-left">
            $ 100,000
          </b>
          <img
            className="absolute w-[calc(100%_-_126px)] top-[113px] right-[45px] left-[81px] max-w-full overflow-hidden h-[74px] mix-blend-normal"
            alt=""
            src="/secondary.svg"
          />
          <div className="absolute w-[calc(100%_-_108px)] top-[238px] right-[22px] left-[86px] h-6 text-center">
            <div className="absolute w-[calc(100%_-_392px)] top-[0px] right-[392px] left-[0px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                1 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-81px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-primary-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[295px] left-[99px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                8 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-130px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-primary-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_392px)] top-[0px] right-[196px] left-[196px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                16 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-58px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-primary-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[99px] left-[295px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                24 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-107px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-primary-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_392px)] top-[0px] right-[0px] left-[392px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                31 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-75px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-primary-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_581px)] top-[0px] right-[0px] left-[581px] h-[286px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-neutral-white shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]" />
          </div>
          <b className="absolute top-[72px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $100,000
          </b>
          <b className="absolute top-[104px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $80,000
          </b>
          <b className="absolute top-[136px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $60,000
          </b>
          <b className="absolute top-[168px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $40,000
          </b>
          <b className="absolute top-[200px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $20,000
          </b>
          <b className="absolute top-[232px] left-[24px] tracking-[0.2px] leading-[12px] inline-block w-[46px] h-3">
            $0
          </b>
          <img
            className="absolute w-[calc(100%_-_106px)] top-[77.5px] right-[24.5px] left-[81.5px] max-w-full overflow-hidden h-[161px]"
            alt=""
            src="/dividers2.svg"
          />
          <b className="absolute top-[33px] right-[24px] text-xs tracking-[0.1px] leading-[16px]">
            Income in current week
          </b>
          <b className="absolute top-[24px] left-[24px] text-xl tracking-[0.2px] leading-[26px] text-neutral-black text-left">
            $ 25,000
          </b>
          <img
            className="absolute w-[calc(100%_-_126px)] top-[115.5px] right-[45px] left-[81px] max-w-full overflow-hidden h-24 mix-blend-normal"
            alt=""
            src="/secondary1.svg"
          />
          <div className="absolute w-[calc(100%_-_108px)] top-[238px] right-[22px] left-[86px] h-6 text-center">
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[394px] left-[0px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                25 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-109px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_392px)] top-[0px] right-[327px] left-[65px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                26 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-61px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[262px] left-[132px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                27 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-97px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[197px] left-[197px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                28 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-72px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[132px] left-[262px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                29 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-128px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_392px)] top-[0px] right-[65px] left-[327px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                30 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-33px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
            <div className="absolute w-[calc(100%_-_394px)] top-[0px] right-[0px] left-[394px] h-6">
              <b className="absolute w-full top-[12px] left-[0px] tracking-[0.2px] leading-[12px] inline-block">
                31 July
              </b>
              <img
                className="absolute top-[0px] left-[calc(50%_-_0px)] w-px h-1.5"
                alt=""
                src="/data-pointer.svg"
              />
              <div className="absolute top-[-90px] left-[calc(50%_-_5.5px)] rounded-[50%] bg-yellow-light box-border w-3 h-3 border-[3px] border-solid border-neutral-white" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminMain;
