# nexova Incidents API

Backend FastAPI para analizar archivos CSV de incidencias de nexova.

## Ejecutar

Desde la raíz del monorepo:

```bash
source .venv/bin/activate
python -m uvicorn services.api.main:app --host 0.0.0.0 --port 8000 --reload
```
