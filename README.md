# 📌 Aplikacja: Lista Postów

## 1️⃣ Struktura katalogów

```bash
src/app/
├── core/                     
│   ├── services/
│   │   ├── posts.store.ts
│   │   └── favorites.service.ts
│   └── models/
│       ├── post.model.ts
│       ├── user.model.ts
│       └── comment.model.ts
│
├── shared/
│   ├── components/
│   │   ├── post-card/
│   │   │   ├── post-card.component.ts
│   │   │   └── post-card.component.html
│   │   │
│   │   ├── filter-bar/
│   │   │   ├── filter-bar.component.ts
│   │   │   └── filter-bar.component.html
│   │   │
│   │   └── comment-card/
│   │       ├── comment-card.component.ts
│   │       └── comment-card.component.html
│   │
│   └── ui/
│       ├── card/
│       │   ├── card.component.ts
│       │   └── card.component.html
│       │
│       ├── select/
│       │   ├── select.component.ts
│       │   └── select.component.html
│       │
│       ├── input/
│       │   ├── input.component.ts
│       │   └── input.component.html
│       │
│       └── button/
│           ├── button.component.ts
│           └── button.component.html
│
├── features/
│   └── posts/
│       ├── pages/
│       │   ├── post-list/
│       │   │   ├── post-list.component.ts
│       │   │   └── post-list.component.html
│       │   │
│       │   └── post-details/
│       │       ├── post-details.component.ts
│       │       └── post-details.component.html
│
```

## 2️⃣ Lista komponentów

### Shared / Components

**PostCardComponent** – wyświetla fragment posta, toggle ulubione, korzysta z Card i ButtonComponent.

**FilterBarComponent** – panel filtracji: InputComponent (treść), SelectComponent (użytkownik), filtrowanie postów oznaczonych jako ulubione.

**CommentCardComponent** – wyświetla pojedynczy komentarz w PostDetailsComponent.

### Shared / UI

**CardComponent** – generyczny kontener wizualny z ramką i cieniem.

**SelectComponent** – dropdown, np. wybór użytkownika.

**InputComponent** – pole tekstowe, np. do filtrowania postów.

**ButtonComponent** – generyczny przycisk, np. do toggle ulubione lub akcji w filtrach.

### Features / Posts / Pages

**PostListComponent** – lista postów po filtrach, używa PostCardComponent.

**PostDetailsComponent** – szczegóły posta: pełny tytuł, treść, autor, komentarze (CommentCardComponent).

## 3️⃣ Serwisy

**PostsStore** – singleton signal store; przechowuje posty, obsługuje filtrację i cache.

**FavoritesService** – singleton przechowujący listę ulubionych postów; metody: `toggleFavorite()` i `isFavorite()`.

## 4️⃣ Podejście do zarządzania stanem

### PostsStore (Signal Store):
- Centralne przechowywanie listy postów i filtrów
- Reaktywnie powiadamia komponenty o zmianach stanu
- Ponowne pobranie danych tylko przy zmianie filtrów lub odświeżeniu strony
- Wykorzystuje **Angular `Resource`** do reaktywnego pobierania danych zgodnie z [Angular Signals Guide](https://angular.dev/guide/signals/resource).
- Użycie **`injectParams()`**, do pobiernaie id posta, co pozwala automatycznie reagować na zmiany w URL. [ngxtension](https://ngxtension.netlify.app/utilities/injectors/inject-params/). 
### FavoritesService:
- Singleton przechowujący ulubione posty (ID)
- Komponenty korzystają z metod `toggleFavorite()` i `isFavorite()` zamiast przechowywać lokalny stan
