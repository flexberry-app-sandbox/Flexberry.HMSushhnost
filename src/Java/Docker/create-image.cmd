docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hm_sushhnost-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hm_sushhnost-java/app ../../..
