ElasticStack Study
===

```bash
curl -XPOST http://localhost:5601/api/saved_objects/index-pattern/filebeat-* -H "Content-Type: application/json" -H "kbn-xsrf: true" --data @"filebeat.json"
```
