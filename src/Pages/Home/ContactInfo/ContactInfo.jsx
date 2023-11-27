import time from '../../../assets/icons/timetable.png'
import call from '../../../assets/icons/call_msg.png'
import location from '../../../assets/icons/Location.png'
const ContactInfo = () => {
    return (
        <div className='flex justify-center mb-12'>
            <div className='w-5/6 h-96 md:h-60 bg-[#151515] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex items-center justify-center'>
                {/* time */}
                <div className='flex gap-5 mx-auto'>
                    {/* time img */}
                    <div className='mt-3'>
                        <img src={time} alt="" />
                    </div>
                    {/* days content */}
                    <div className='text-white space-y-3'>
                        <h3 className='text-base font-normal'>We are open monday-friday</h3>
                        <h3 className='text-lg font-bold'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>

                {/* call */}
                <div className='flex gap-5 mx-auto'>
                    {/* time img */}
                    <div className='mt-3'>
                        <img src={call} alt="" />
                    </div>
                    {/* days content */}
                    <div className='text-white space-y-3'>
                        <h3 className='text-base font-normal'>Have a question?</h3>
                        <h3 className='text-lg font-bold'>+2546 251 2658</h3>
                    </div>
                </div>

                {/* location */}

                <div className='flex gap-5 mx-auto'>
                    {/* time img */}
                    <div className='mt-3'>
                        <img src={location} alt="" />
                    </div>
                    {/* days content */}
                    <div className='text-white space-y-3'>
                        <h3 className='text-base font-normal'>Need a repair? our address</h3>
                        <h3 className='text-lg font-bold'>Liza Street, New York</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactInfo;