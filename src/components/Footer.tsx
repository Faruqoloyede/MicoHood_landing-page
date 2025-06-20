
import { social_media } from '../constants';

const Footer = () => {
    const date = new Date();
    const year =date.getFullYear()
  return (
    <footer className="bg-background border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <p className="text-sm text-hero font-medium text-center sm:text-left">
          &copy; Micotech {year}. All rights reserved.
        </p>

        <div className="flex gap-4">
            {social_media.map(({id, icon})=>(
            <a key={id} href="#" className="text-hero hover:text-primary transition text-lg">
               {icon}
            </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
