import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const AboutUsPic = () => {
    return (
        <div className='relative w-4/5 mx-auto flex my-20'>
            <img className=' w-4/3' src={person} alt="" />
            <img className=' w-2/3 absolute left-1/2 top-1/2' src={parts} alt="" />
        </div>
    );
};

export default AboutUsPic;