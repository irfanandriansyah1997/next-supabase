import NotesCalendar from './calendar';
import NotesHeading from './heading';
import { styNotesPage } from './style';

/**
 * Notes Page Container
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes page container html
 */
const NotesPageContainer = () => (
  <div className={styNotesPage}>
    <section className="content">
      <NotesHeading />
    </section>
    <NotesCalendar />
  </div>
);

export default NotesPageContainer;
