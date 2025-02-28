// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className='w-full py-8 px-6 bg-gradient-to-r from-[#111] via-[#222] to-[#111] text-white'>
//             <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
//                 {/* Left - Brand Name */}
//                 <div className='text-center md:text-left'>
//                     <h2 className='text-2xl font-bold'>Ad Agency</h2>
//                     <p className='text-gray-400 text-sm mt-1'>
//                         Elevate your brand with creative advertising.
//                     </p>
//                 </div>

//                 {/* Center - Social Media Icons */}
//                 <div className='flex space-x-4 my-4 md:my-0'>
//                     <a href='#' className='footer-icon'>
//                         <Facebook size={20} />
//                     </a>
//                     <a href='#' className='footer-icon'>
//                         <Twitter size={20} />
//                     </a>
//                     <a href='#' className='footer-icon'>
//                         <Instagram size={20} />
//                     </a>
//                     <a href='#' className='footer-icon'>
//                         <Linkedin size={20} />
//                     </a>
//                 </div>

//                 {/* Right - Call to Action */}
//                 <div className='text-center md:text-right'>
//                     <button className='relative px-6 py-2 text-sm font-semibold text-white border border-[#D72638] rounded-lg hover:bg-[#D72638] transition-all duration-300'>
//                         Contact Us
//                     </button>
//                 </div>
//             </div>

//             {/* Bottom Divider */}
//             <div className='w-full border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-sm'>
//                 &copy; 2025 Ad Agency. All rights reserved.
//             </div>
//         </footer>
//     );
// }

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='w-full py-8 px-6 bg-gradient-to-t from-black via-[#111] to-[#222] text-white relative'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                {/* Left - Brand Name */}
                <div className='text-center md:text-left'>
                    <h2 className='text-2xl font-bold'>Inkwell Media Agency</h2>
                    <p className='text-gray-400 text-sm mt-1'>
                        Elevate your brand with creative advertising.
                    </p>
                </div>

                {/* Center - Social Media Icons */}
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href='#' className='footer-icon'>
                        <Facebook size={20} />
                    </a>
                    <a href='#' className='footer-icon'>
                        <Twitter size={20} />
                    </a>
                    <a href='#' className='footer-icon'>
                        <Instagram size={20} />
                    </a>
                    <a href='#' className='footer-icon'>
                        <Linkedin size={20} />
                    </a>
                </div>

                {/* Right - Call to Action */}
                <div className='text-center md:text-right'>
                    <button className='relative px-6 py-2 text-sm font-semibold text-white border border-[#D72638] rounded-lg hover:bg-[#D72638] transition-all duration-300'>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className='w-full border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-sm'>
                &copy; 2025 Inkwell Media Agency. All rights reserved.
            </div>
        </footer>
    );
}
