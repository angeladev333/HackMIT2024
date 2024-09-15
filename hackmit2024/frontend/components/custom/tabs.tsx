import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NodeTabs() {
  const numTabs = 2;
  return (
    <div className="w-full max-w-full">
      <Tabs defaultValue="tab-1">
        <TabsList className={`grid w-full grid-cols-${numTabs}`}>
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <div>
            <h1>Hello</h1>
          </div>
        </TabsContent>
        <TabsContent value="tab-2">
          <div>
            <h1>Bonjour</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
