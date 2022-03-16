
export default function Galery() {
  // gérer les états du filtre et des cards
  const [filter, setFilter] = useState();
  const [cards, setCards] = useState([]);

  //appliquer les effets à chaque clic sur un bouton
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(portfolios);
      const json = await resp.json();
      if (resp.ok) setCards(json.data);
    };
    fetchData();
  }, []);

  const filterToggles = useMemo(() => {
    Object.values(filters).map(([value, label]) => {
      <a key={value} active={filter === value} onClick={() => setFilter(value)}>
        {label}
      </a>;
    });
  }, [filter]);

  const filteredCards = useMemo(
    () =>
      cards.flatMap((item) =>
        !filter || item.categories.includes(filter)
          ? [
              <figure key={item.name}>
                <span className="card-container" key={item.name}>
                  <img className="card" src={item.src} />
                  {item.name}
                </span>
                <figcaption>
                  <div className="label-author">{item.author}</div>
                  <span className="label-category">{item.description}</span>
                </figcaption>
              </figure>,
            ]
          : []
      ),
    [cards, filter]
  );

  return (
    <Wrapper>
      <div className="containter-portfolio">
        <div className="portfolio-filter">{filterToggles}</div>
        <SRLWrapper>
          <div className="portfolio-card">{filteredCards}</div>
        </SRLWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 75px;
`;