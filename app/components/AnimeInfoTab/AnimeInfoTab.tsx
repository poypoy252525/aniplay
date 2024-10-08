import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimeInfo } from "@/types/AnimeInfo";
import Characters from "./Characters";
import Overview from "./Overview";
import Relations from "./Relations";

const AnimeInfoTab = ({ anime }: { anime: AnimeInfo }) => {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="bg-transparent mb-3">
        <TabsTrigger
          value="overview"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white data-[state=active]:dark:bg-black rounded-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="relations"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white data-[state=active]:dark:bg-black rounded-none"
        >
          Relations
        </TabsTrigger>
        <TabsTrigger
          value="characters"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white data-[state=active]:dark:bg-black rounded-none"
        >
          Characters
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Overview anime={anime} />
      </TabsContent>
      <TabsContent value="relations">
        <Relations anime={anime} />
      </TabsContent>
      <TabsContent value="characters">
        <Characters anime={anime} />
      </TabsContent>
    </Tabs>
  );
};

export default AnimeInfoTab;
