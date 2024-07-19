using Microsoft.JSInterop;
using static System.Net.Mime.MediaTypeNames;
namespace ECO;

    public partial class Grid
    {
    /*
        List<Delta> deltaList;

        protected override void OnInitialized()
        {
            deltaList = new List<Delta>();
            deltaList.Add(new Delta { Id = 23, Name = "a n g e l a", LastName = "jauregui", UnitPrice = 8.93, Item = "compu" });
            deltaList.Add(new Delta { Id = 43, Name = "angela", LastName = "ggrt", UnitPrice = 8.93, Item = "feger" });
            deltaList.Add(new Delta { Id = 26, Name = "angela", LastName = "greg", UnitPrice = 8.93, Item = "grege" });
            deltaList.Add(new Delta { Id = 27, Name = "juan", LastName = "romeor", UnitPrice = 8.93, Item = "wfeg" });
            deltaList.Add(new Delta { Id = 29, Name = "francis", LastName = "tghrg", UnitPrice = 8.93, Item = "gege" });
            base.OnInitialized();
        }
    */
        private void FormClosed()
        {
            Console.WriteLine("Entro al metodo"); 
            foreach (var item in deltaList)
             {
            Console.WriteLine( item.Id);
            Console.WriteLine(item.Name);
            Console.WriteLine(item.LastName);
            Console.WriteLine(item.UnitPrice);
            Console.WriteLine("********************");
             }

        }

    //**********************************************
   
   

}

public class Delta
{

    public int Id { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public double UnitPrice { get; set; }
    public string Item { get; set; }
}
