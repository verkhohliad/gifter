import i18n from 'i18n-js';

import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

i18n.fallbacks = true;
i18n.translations = { en, ru, ua };

export default i18n;
