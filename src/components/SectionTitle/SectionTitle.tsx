import ViewAllBtn from '../ViewAllBtn/ViewAllBtn';
import './sectionTitle.css';

interface SectionTitleProp {
   title: string;
   btn?: {
      text: string,
      url?: string,
   }
}

function SectionTitle({ title, btn = { text: '' } }: SectionTitleProp) {
   return (
      <div className="sectionTitle__container">
         <h2 className="sectionTitle__title">{title}</h2>
         {btn?.text.length > 0 && <ViewAllBtn text={btn?.text} />}
      </div>
   )
}

export default SectionTitle