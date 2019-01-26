ElasticStack Study
===


# this study contains:
  - a dummy application
  - filebeat 
  - logstash listening filebeat
  - logstash-sample with data generation
  - elasticsearch
  - kibana


# run it

up docker compose
```bash
$ docker-compose build && docker-compose up
```

After **Kibana** up, run
```bash
$ curl -XPOST http://localhost:5601/api/saved_objects/index-pattern/filebeat-* -H "Content-Type: application/json" -H "kbn-xsrf: true" --data @"filebeat.json"
```

or you can enter in **Kibana** interface and create your own index patterns.

## Enjoy it!
Change configs, rebuild and run, try someone different..

Luiz Zamboni ;)
