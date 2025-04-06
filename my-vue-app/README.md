# React + Vite

```
  const axiosPublic = useAxiosPublic();

  const { data: detailArticle = [] } = useQuery({
    queryKey: ['detailArticle'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/news/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

```
```
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  ```
