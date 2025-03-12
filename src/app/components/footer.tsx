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

// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export default function Footer() {
//     return (
//         <footer className='w-full py-8 px-6 bg-gradient-to-t from-black via-[#111] to-[#222] text-white relative'>
//             <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
//                 {/* Left - Brand Name */}
//                 <div className='text-center md:text-left'>
//                     <h2 className='text-2xl font-bold'>Inkwell Media Agency</h2>
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
//                 &copy; 2025 Inkwell Media Agency. All rights reserved.
//             </div>
//         </footer>
//     );
// }

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <div className='relative w-full bg-white text-[#000433] pt-12'>
            <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-t from-[#00043350] to-transparent'></div>
            <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* Left - Brand Name */}
                <div className='text-center md:text-left mb-6 md:mb-0'>
                    <h2 className='text-3xl font-bold text-[#000433]'>
                        Inkwell Media Agency
                    </h2>
                    <p className='text-gray-800 text-sm mt-1 max-w-xs'>
                        Elevate your brand with creative advertising.
                    </p>
                </div>

                {/* Center - Social Media Icons */}
                <div className='flex space-x-6 mb-6 md:mb-0'>
                    <a
                        href='#'
                        className='text-[#000433] hover:text-[#ff6600] transition-all'
                    >
                        <Facebook size={24} />
                    </a>
                    <a
                        href='#'
                        className='text-[#000433] hover:text-[#ff6600] transition-all'
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href='#'
                        className='text-[#000433] hover:text-[#ff6600] transition-all'
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href='#'
                        className='text-[#000433] hover:text-[#ff6600] transition-all'
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                {/* Right - Call to Action */}
                <div className='text-center md:text-right'>
                    <button className='px-8 py-3 text-sm font-semibold text-white bg-[#000433] border border-[#000433] rounded-full shadow-lg hover:bg-[#ff6600] hover:border-[#ff6600] transition-all duration-300'>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className='w-full border-t border-[#8792ae] mt-8 pt-4 text-center text-gray-800 text-sm pb-6'>
                &copy; 2025 Inkwell Media Agency. All rights reserved.
            </div>
        </div>
    );
}
