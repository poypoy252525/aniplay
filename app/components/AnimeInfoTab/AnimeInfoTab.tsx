import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IAnimeInfo } from "@consumet/extensions";
import Overview from "./Overview";
import Relations from "./Relations";
import Characters from "./Characters";

const AnimeInfoTab = ({ anime }: { anime: IAnimeInfo }) => {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="bg-transparent mb-3">
        <TabsTrigger
          value="overview"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white rounded-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="relations"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white rounded-none"
        >
          Relations
        </TabsTrigger>
        <TabsTrigger
          value="characters"
          className="border-b bg-transparent dark:border-b-black data-[state=active]:dark:border-b-white rounded-none"
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
