namespace api.Models
{
    public class MovieShortViewModel
    {
        public int Id { get; set; }
        public string Name { get; set;}
        public string Language { get; set; }
        public string Duration { get; set; }
        public double Rating { get; set; }
        public string Genre { get; set; }
        public string ImageUrl { get; set; }
    }
}