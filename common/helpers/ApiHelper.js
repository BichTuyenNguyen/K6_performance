import http from "k6/http";

export class ApiHelper{
  get(url, token, body) {
    return http.get(url, JSON.stringify(body), {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/json"
      },
    });
  }

  post(url, token, body) {
    return http.post(url, JSON.stringify(body), {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/json"
      },
    });
  }

   put(url, token, body) {
    return http.put(url, JSON.stringify(body), {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/json",
      },
    });
  }

   delete(url, token, body) {
    return http.delete(url, JSON.stringify(body), {
      headers: {
        Authorization: "Basic " + token,
        "Content-Type": "application/json",
      },
    });
  }

  postCookie(url, token, body) {
    return http.post(url, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
       "Cookie": `ajs_anonymous_id="c602ba53-0343-4099-9a5c-f1fed8e6a051"; experiment.team23.persistent.ipm.targeting.user.site.trait=true; cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MzliZjFhOTJhYWMzODlkMDJjMjk5MWEiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjc3NjU0MTg0LCJyZWZyZXNoVGltZW91dCI6MTY3ODI2MjQwMSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6ImFjYTEyYmNjLTJjNjQtNGU2My05NzkzLWNiOTIyZWVkYjRkYiIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2NzgyNjE4MDEsImV4cCI6MTY4MDg1MzgwMSwiaWF0IjoxNjc4MjYxODAxLCJlbWFpbCI6InFlYXV0b21hdGlvbmthdGFsb25AZ21haWwuY29tIiwianRpIjoiYWNhMTJiY2MtMmM2NC00ZTYzLTk3OTMtY2I5MjJlZWRiNGRiIn0.EBNxySZPYPJCR4fkFrS_OeS3ftPDiEhnYR0dy98zR5ff-PMc4roOVU8oNdMQ7ce4TtEz9vWH7jUh9EbezvWhnVKY8WUF-5mbpuyU57RB1W05i8erz3v3WjSs_lsb8YT0fXs7i0Js7apxxBfw8EUQZmiVDML6KzSRh35JJkVPo3u6OHD_-pq9msghIKCG1Rfr7AqjLOzsbLvS60MZ9k0HqTQq2tSfhLhU-H6vBnxoEYpgTSJ-I-FO7jNV120kNxraRKQdNp1C68YGX_FAhmg2QzHFsynnf32iyKiilSGVNGtVnbNwyS2Rz0aYajSEBUw9x-etO9dIj8n7xOk1A3wK-w; atlassian.xsrf.token=ca8998ab-99e4-4850-8154-b5f34f0645b7_f215c787ed5ad34577d095d68a3a8b9665cff180_lin; tenant.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MzliZjFhOTJhYWMzODlkMDJjMjk5MWEiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjc3NjU0MTg0LCJyZWZyZXNoVGltZW91dCI6MTY3ODI2MjQwNSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6ImFjYTEyYmNjLTJjNjQtNGU2My05NzkzLWNiOTIyZWVkYjRkYiIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2NzgyNjE4MDUsImV4cCI6MTY4MDg1MzgwNSwiaWF0IjoxNjc4MjYxODA1LCJlbWFpbCI6InFlYXV0b21hdGlvbmthdGFsb25AZ21haWwuY29tIiwianRpIjoiYWNhMTJiY2MtMmM2NC00ZTYzLTk3OTMtY2I5MjJlZWRiNGRiIn0.M2vBGrKin8JA_6KOaFttHPiykd2Ck_DhAhdCSd-TB_ftJbb3y-VO8ldtFYaAs5-YLtmURGt0hK9l2b6Obn1P2sgw7VmXWQi21SLuUk2eQyyfKDUwF2o9XksZ9ZFfoL4zVIrS08i9Mi5R-zQ-U0U0pMlGIW7dhQbEZgqM776XepawrDZt2Q_eQn8loCaBlb8_ApNQSy3ep6QJG0LbmI0RbwgJbDA3ZlDdiGtaXOkkDe7STzgbMsysLfcvs_sibmIIcxjuHPa9D0tj_8Namb2B2vo6w9Mbt2xRU6bTy5_Cj5x5zDo6O_vnpi8N9z4vI2NbM2XDM-pZes_gOvssx7AfMg; JSESSIONID=5D76F7E8BA6B5D1CEF788A81289DCA5C`
      },
    });
  }
  
  putCookie(url, token, body) {
    return http.put(url, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
         "Cookie": `ajs_anonymous_id="c602ba53-0343-4099-9a5c-f1fed8e6a051"; experiment.team23.persistent.ipm.targeting.user.site.trait=true; cloud.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MzliZjFhOTJhYWMzODlkMDJjMjk5MWEiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjc3NjU0MTg0LCJyZWZyZXNoVGltZW91dCI6MTY3ODI2MjQwMSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6ImFjYTEyYmNjLTJjNjQtNGU2My05NzkzLWNiOTIyZWVkYjRkYiIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2NzgyNjE4MDEsImV4cCI6MTY4MDg1MzgwMSwiaWF0IjoxNjc4MjYxODAxLCJlbWFpbCI6InFlYXV0b21hdGlvbmthdGFsb25AZ21haWwuY29tIiwianRpIjoiYWNhMTJiY2MtMmM2NC00ZTYzLTk3OTMtY2I5MjJlZWRiNGRiIn0.EBNxySZPYPJCR4fkFrS_OeS3ftPDiEhnYR0dy98zR5ff-PMc4roOVU8oNdMQ7ce4TtEz9vWH7jUh9EbezvWhnVKY8WUF-5mbpuyU57RB1W05i8erz3v3WjSs_lsb8YT0fXs7i0Js7apxxBfw8EUQZmiVDML6KzSRh35JJkVPo3u6OHD_-pq9msghIKCG1Rfr7AqjLOzsbLvS60MZ9k0HqTQq2tSfhLhU-H6vBnxoEYpgTSJ-I-FO7jNV120kNxraRKQdNp1C68YGX_FAhmg2QzHFsynnf32iyKiilSGVNGtVnbNwyS2Rz0aYajSEBUw9x-etO9dIj8n7xOk1A3wK-w; atlassian.xsrf.token=ca8998ab-99e4-4850-8154-b5f34f0645b7_f215c787ed5ad34577d095d68a3a8b9665cff180_lin; tenant.session.token=eyJraWQiOiJzZXNzaW9uLXNlcnZpY2VcL3Byb2QtMTU5Mjg1ODM5NCIsImFsZyI6IlJTMjU2In0.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI2MzliZjFhOTJhYWMzODlkMDJjMjk5MWEiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjc3NjU0MTg0LCJyZWZyZXNoVGltZW91dCI6MTY3ODI2MjQwNSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6ImFjYTEyYmNjLTJjNjQtNGU2My05NzkzLWNiOTIyZWVkYjRkYiIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2NzgyNjE4MDUsImV4cCI6MTY4MDg1MzgwNSwiaWF0IjoxNjc4MjYxODA1LCJlbWFpbCI6InFlYXV0b21hdGlvbmthdGFsb25AZ21haWwuY29tIiwianRpIjoiYWNhMTJiY2MtMmM2NC00ZTYzLTk3OTMtY2I5MjJlZWRiNGRiIn0.M2vBGrKin8JA_6KOaFttHPiykd2Ck_DhAhdCSd-TB_ftJbb3y-VO8ldtFYaAs5-YLtmURGt0hK9l2b6Obn1P2sgw7VmXWQi21SLuUk2eQyyfKDUwF2o9XksZ9ZFfoL4zVIrS08i9Mi5R-zQ-U0U0pMlGIW7dhQbEZgqM776XepawrDZt2Q_eQn8loCaBlb8_ApNQSy3ep6QJG0LbmI0RbwgJbDA3ZlDdiGtaXOkkDe7STzgbMsysLfcvs_sibmIIcxjuHPa9D0tj_8Namb2B2vo6w9Mbt2xRU6bTy5_Cj5x5zDo6O_vnpi8N9z4vI2NbM2XDM-pZes_gOvssx7AfMg; JSESSIONID=5D76F7E8BA6B5D1CEF788A81289DCA5C`
      },
    });
  }
}
