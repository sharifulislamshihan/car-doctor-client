import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const AboutUsPic = () => {
    return (
        <div className='relative w-4/5 mx-auto flex my-20'>
            <img className=' w-4/3 rounded-lg shadow-2xl' src={person} alt="" />
            <img className=' w-2/3 absolute left-1/2 top-1/2 border-8 border-white shadow-2xl rounded-lg' src={parts} alt="" />
        </div>
    );
};

export default AboutUsPic;