import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { transactionsReduser } from './Transactions/TransactionsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reportsReducer } from './reports/reportsSlice';
import { reportsQueryReducer } from './reportsQuery/reportsQuerySlice';

/*
Wracając do pracy nad tym projektem:
1. na początku store i reducery i selectory
2. Potem reszta :)

1. **Struktura Store**:
   - Zastanówcie się, czy struktura Store jest skonstruowana optymalnie. Czy wszystkie jej elementy są istotne i funkcjonalne? Rozważcie, czy niektóre zadania, takie jak dynamiczne obliczenia, mogą być lepiej realizowane poza Store. Pamiętajcie, że Store powinien zawierać dane istotne dla całej aplikacji.

2. **Reducery i Selectory**:
   - **Reducery**: Przyjrzyjcie się, czy istniejące reducery są efektywne i niezbędne. Identyfikujcie te, które mogą być redundantne.
   - **Selectory**: Upewnijcie się, że dostarczają one odpowiednich danych dla widoków. Warto rozważyć wykorzystanie `createSelector` do zwiększenia ich efektywności.

3. **Nazewnictwo Plików**:
   - Proszę, zwróćcie uwagę na spójność i precyzję w nazewnictwie plików. To ważne dla klarowności i łatwości orientacji w projekcie.

4. **Mechanizm Wylogowywania**:
   - Napotkałem problem z wylogowywaniem, gdy token traci ważność. Może warto rozważyć umożliwienie wylogowania bez względu na odpowiedź backendu, czyli automatyczne czyszczenie danych użytkownika z Store.

5. **Aktualizacja README.md**:
   - To ważne, aby README.md odzwierciedlał cel projektu, instrukcje użycia i uzasadnienie przyjętych rozwiązań. To pierwsze źródło informacji dla nowych użytkowników i współpracowników i potencjalnych rekruterów.

6. **Adresowanie Błędów**:
   - Zauważyłem, że niektóre widoki, np. podsumowania, nie działają prawidłowo. Proszę, zwróćcie na to szczególną uwagę i rozważcie ich naprawę.
*/

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReduser,
    reports: reportsReducer,
    reportsQuery: reportsQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
