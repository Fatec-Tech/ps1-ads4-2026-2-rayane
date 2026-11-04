#!/bin/bash
# Atividade 07a - Homologação da API REST com curl

BASE="https://api-clinica-rayane-borges.onrender.com/pacientes"

echo "=== 1. GET (listar todos) ==="
curl -i --ssl-no-revoke -X GET "$BASE"

echo
echo "=== 2. POST (cadastrar) ==="
RESP=$(curl -i --ssl-no-revoke -X POST "$BASE" \
  -H "Content-Type: application/json" \
  -d '{"nome":"Paciente Teste CLI","email":"teste.cli@email.com","nascimento":"1998-05-20"}')
echo "$RESP"

ID=$(echo "$RESP" | grep -o '"id":[ ]*"\?[A-Za-z0-9-]*' | head -1 | grep -o '[A-Za-z0-9-]*$')
echo
echo ">>> ID gerado: $ID"

if [ -z "$ID" ]; then
  echo "Não consegui extrair o id. Copie o id da resposta acima e rode os passos 3, 4 e 5 manualmente."
  exit 1
fi

echo
echo "=== 3. GET por ID ==="
curl -i --ssl-no-revoke -X GET "$BASE/$ID"

echo
echo "=== 4. PUT (atualizar) ==="
curl -i --ssl-no-revoke -X PUT "$BASE/$ID" \
  -H "Content-Type: application/json" \
  -d '{"nome":"Paciente Atualizado CLI","email":"teste.cli@email.com","nascimento":"1998-05-20"}'

echo
echo "=== 5. DELETE (remover) ==="
curl -i --ssl-no-revoke -X DELETE "$BASE/$ID"
echo
