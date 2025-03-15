# Django-React-CRUD

CRUD (Create, Read, Update, Delete) App created with Django and React.js

## Installation

Clone the repository:
    ```
    git clone https://github.com/pxiaccount/Django-React-CRUD.git
    ```

### Django

1. Change directory in to backend:

    ```bash
    cd Django-React-CRUD/server/backend
    ```

2. Create a virtual environment and activate it:
    ```bash
    python -m venv venv
    venv\Scripts\activate  # On Windows
    source venv/bin/activate  # On macOS/Linux
    ```
3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Create a `.env` file in the root directory of the project and add the following environment variables:
    ````plaintext
    SECRET_KEY=your-secret-key
    ````
    Replace `your-secret-key` with a secure, random string. You can generate a secret key using the following Python code:
    ```python
    from django.core.management.utils import get_random_secret_key
    print(get_random_secret_key())
    ```
5. Apply the migrations:
    ```bash
    python manage.py migrate
    ```
6. Run the development server:
    ```bash
    python manage.py runserver
    ```
### React
1. Change directory in to client:

    ```bash
    cd Django-React-CRUD/client
    ```

2. Install packages:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```
