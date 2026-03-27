"use client";
import Image from "next/image";

export default function Mainpage() {
  return (
    <>
      <div className="bg-cream w-full rounded-t-2xl border-t-2 border-[#d4af37]/30 p-10 shadow-2xl overflow-hidden">
        <div className="mt-5">
          <p className="font-chenla text-2xl text-gold-dark text-center font-bold">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </p>
        </div>
        <div className="font-chenla text-gold-dark flex items-center justify-between mt-6 mb-4">
          <span>
            លោក​ <span className="font-bold">ផុន សុផាត</span>
          </span>
          <span className="mr-3">
            លោក​​ <span className="font-bold">ឡាង វុទ្ធី</span>
          </span>
        </div>
        <div className="font-chenla text-gold-dark flex items-center justify-between">
          <span>
            លោកស្រី​ <span className="font-bold">គង់ ចិន្ដា</span>
          </span>
          <span>
            លោក​​ស្រី​ <span className="font-bold">អ៊ូ ធីតា</span>
          </span>
        </div>
        <p className="text-xl font-chenla text-gold-dark mt-8 text-center font-semibold">
          យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
        </p>
        <p className="text-lg font-chenla text-gold-dark mt-4 text-center leading-9">
          សម្ដេច​ ទ្រង់ ឯកឧត្ដម លោកជំទាវ អ្នកឧកញ៉ា លោកឧកញ៉ា​ លោក លោកស្រី
          អ្នកនាង​ កញ្ញា អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស​ ដើម្បីប្រសិទ្ធពរជ័យ
          សិរិសួស្ដីជ័យមង្គលក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍កូនប្រុស
          កូនស្រីយើងខ្ញុំ។
        </p>
        <div className="font-chenla text-gold-dark grid grid-cols-2 justify-between mt-6">
          <span className="justify-self-start ml-9">កូនប្រុសនាម</span>
          <span className="justify-self-end mr-12">កូនស្រីនាម</span>
        </div>
        <div className="font-chenla text-gold-dark grid grid-cols-3 justify-between mt-6 mb-4">
          <span className="justify-self-center text-xl font-bold">
            ផុន​ ឡង់ឌី
          </span>
          <span className="justify-self-center">ជាគូនឹង</span>
          <span className="justify-self-center text-xl font-bold">
            ឡាង ស្រីពៅ
          </span>
        </div>
        <p className="text-lg font-chenla text-gold-dark mt-8 text-center leading-9">
          នៅថ្ងៃពុធ ទី​ ២២​ ខែ មេសា ឆ្នាំ ២០២៦ ត្រូវនឹងថ្ងៃ ៦កើត ខែពិសាខ
          ឆ្នាំមមី អដ្ឋស័ក ពុទ្ធសករាជ ២៥៦៩ ពេលលាម៉ោង ៤​ រសៀល
          ស្ថិតនៅគេហដ្ឋានខាងកូនស្រី ភូមទំពូងផ្ទះវីងវេរលុយ ឃុំល្វេ ស្រុកកោះសូទិន
          ខេត្តកំពង់ចាម។ សូមអរគុណ
        </p>
        {/* <Image
          src="/images/icon2.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto my-8"
        /> */}
        <Image
          src="/images/icon1.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto my-8"
        />
        <div>
          <p className="text-3xl text-gold-dark text-center font-bold">
            Happy Wedding
          </p>
        </div>
        <div className="text-2xl text-gold-dark flex items-center justify-center gap-10 mt-6 mb-4">
          <span>
            Mr.<span className="font-bold"> Phon Sophat</span>
          </span>
          <span className="mr-3">
            Mrs.<span className="font-bold"> Kong Chinda</span>
          </span>
        </div>
        <p className="text-xl text-gold-dark text-center font-bold">
          alongside
        </p>
        <div className="text-2xl text-gold-dark flex items-center justify-center gap-10 mt-4 mb-4">
          <span>
            Mr.<span className="font-bold"> Lang Vuthy</span>
          </span>
          <span className="mr-3">
            Mrs.<span className="font-bold"> Ou Thyda</span>
          </span>
        </div>
        <p className="text-xl text-gold-dark mt-8 text-center leading-9">
          Cordially invite and request the pleasure of your presence at the
          wedding of our beloved children.
        </p>
        <div className="text-gold-dark flex items-center justify-center gap-3 mt-6 mb-4">
          <span className="text-2xl font-bold">Phon Longdy</span>
          <span className="text-2xl font-bold">&</span>
          <span className="text-2xl font-bold">Lang Sreypov</span>
        </div>
        <p className="text-xl text-gold-dark mt-8 text-center leading-9">
          which will be held from <span className="font-bold">4pm</span> on
        </p>
        <div className="text-xl text-gold-dark font-bold justify-items-center grid grid-cols-3 gap-3 mt-6">
          <span className="justify-self-end">April</span>
          <span className="justify-self-center">| 22nd |</span>
          <span className="justify-self-start">2026</span>
        </div>
        <Image
          src="/images/icon1.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto my-8"
        />

        <div className="font-chenla text-gold-dark flex flex-col items-center justify-center">
          <p className=" text-2xl font-bold text-center">
            កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍
          </p>
          <p className="mt-5 text-lg">
            <span className="font-bold">ថ្ងៃទី១៖​ </span>ថ្ងៃអង្គារ ខែមេសា​
            ឆ្នាំ២០២៦
          </p>
          <div className="justify-self-start py-6">
            <p className="">ម៉ោង​ ២ៈ០០ រសៀល ៖ ពិធីក្រុងពាលី</p>
            <p className="mt-4">
              ម៉ោង​ ៣ៈ០០ រសៀល ៖ ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត
            </p>
            <p className="mt-4">ម៉ោង​​ ៥ៈ០០ ល្ងាច ៖ ពិធីជាវខាន់ស្លា</p>
            <p className="mt-4">
              ម៉ោង​ ៦ៈ០០ ល្ងាច ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារពេលល្ងាច
            </p>
          </div>
          <Image
            src="/images/arrow.png"
            alt="Icon Image"
            width={50}
            height={50}
            className="mx-auto my-8"
          />
          <p className="mt-3 text-lg">
            <span className="font-bold">ថ្ងៃទី២៖​ </span>ថ្ងៃពុធ ខែមេសា​
            ឆ្នាំ២០២៦
          </p>
          <div className="justify-self-start py-6">
            <p className="">
              ម៉ោង​ ៦ៈ០០ ព្រឹក ៖ ជួបជុំភ្ញៀវកត្តិយសរៀបចំពិធីហែជំនូន
            </p>
            <p className="mt-4">
              ម៉ោង​ ៧ៈ០០ ព្រឹក ៖ ពិធីហែជំនូន (ហែកំណត់) ចូលរោងជ័យ
            </p>
            <p className="mt-4">
              ម៉ោង​ ៧ៈ៣០ ព្រឹក ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារពេលព្រឹក
            </p>
            <p className="mt-4">ម៉ោង​ ៨ៈ០០ ព្រឹក ៖ រៀបចំផ្លែឈើសែនព្រេន</p>
            <p className="mt-4">
              ម៉ោង​ ៩ៈ០០ ព្រឹក ៖ ពិធីកាត់សក់បង្កក់សិរីកូនប្រុសកូនស្រី
            </p>
            <p className="mt-4">
              ម៉ោង​ ១១ៈ០០ ព្រឹក ៖ ពិធីសំពះផ្ទឹម ពិធីបង្វិលពពិល ពិធីសែនចងដៃ
            </p>
            <p className="mt-4">
              ម៉ោង​ ១២ៈ០០ ថ្ងៃត្រង់ ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារថ្ងៃត្រង់
            </p>
            <p className="mt-4">
              ម៉ោង​ ៤ៈ០០ ល្ងាច ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាភោជនាហារ
            </p>
          </div>
          <Image
            src="/images/icon1.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto my-8"
          />
        </div>

        <div className="text-gold-dark font-chenla text-center">
          <p className="text-2xl font-bold">ទីតាំងកម្មវិធី</p>
          <p className="text-lg mt-5">
            ស្ថិតនៅគេហដ្ឋានខាងកូនស្រី​ ភូមទំពូងផ្ទះវីងវេរលុយ ឃុំល្វេ
            ស្រុកកោះសូទិន ខេត្តកំពង់ចាម
          </p>
          <Image
            src="/images/locationQr.jpg"
            alt="QR Code Image"
            width={400}
            height={400}
            className="mx-auto my-8"
          />
          <button
            className="bg-gold-dark text-white py-2 px-4 rounded hover:bg-gold"
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/zGBnxt8Ex3fiDnDv9?g_st=atmp",
                "_blank",
              )
            }
          >
            បង្ហាញទីតាំង
          </button>
        </div>

        <div>
          <p className="font-chenla font-bold text-gold-dark text-2xl text-center mt-16">
            រូបភាព
          </p>
        </div>
      </div>
    </>
  );
}
