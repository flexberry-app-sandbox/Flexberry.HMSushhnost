﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HM_Sushhnost
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Здание.
    /// </summary>
    // *** Start programmer edit section *** (Здание CustomAttributes)

    // *** End programmer edit section *** (Здание CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗданиеE", new string[] {
            "id as \'Id\'",
            "name as \'Name\'",
            "Человек as \'Человек\'",
            "Человек.id as \'Id\'"}, Hidden=new string[] {
            "Человек.id"})]
    [MasterViewDefineAttribute("ЗданиеE", "Человек", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "id")]
    [View("ЗданиеL", new string[] {
            "id as \'Id\'",
            "name as \'Name\'",
            "Человек.id as \'Id\'"})]
    public class Здание : ICSSoft.STORMNET.DataObject
    {
        
        private int fid;
        
        private string fname;
        
        private IIS.HM_Sushhnost.Человек fЧеловек;
        
        // *** Start programmer edit section *** (Здание CustomMembers)

        // *** End programmer edit section *** (Здание CustomMembers)

        
        /// <summary>
        /// id.
        /// </summary>
        // *** Start programmer edit section *** (Здание.id CustomAttributes)

        // *** End programmer edit section *** (Здание.id CustomAttributes)
        public virtual int id
        {
            get
            {
                // *** Start programmer edit section *** (Здание.id Get start)

                // *** End programmer edit section *** (Здание.id Get start)
                int result = this.fid;
                // *** Start programmer edit section *** (Здание.id Get end)

                // *** End programmer edit section *** (Здание.id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.id Set start)

                // *** End programmer edit section *** (Здание.id Set start)
                this.fid = value;
                // *** Start programmer edit section *** (Здание.id Set end)

                // *** End programmer edit section *** (Здание.id Set end)
            }
        }
        
        /// <summary>
        /// name.
        /// </summary>
        // *** Start programmer edit section *** (Здание.name CustomAttributes)

        // *** End programmer edit section *** (Здание.name CustomAttributes)
        [StrLen(255)]
        public virtual string name
        {
            get
            {
                // *** Start programmer edit section *** (Здание.name Get start)

                // *** End programmer edit section *** (Здание.name Get start)
                string result = this.fname;
                // *** Start programmer edit section *** (Здание.name Get end)

                // *** End programmer edit section *** (Здание.name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.name Set start)

                // *** End programmer edit section *** (Здание.name Set start)
                this.fname = value;
                // *** Start programmer edit section *** (Здание.name Set end)

                // *** End programmer edit section *** (Здание.name Set end)
            }
        }
        
        /// <summary>
        /// Здание.
        /// </summary>
        // *** Start programmer edit section *** (Здание.Человек CustomAttributes)

        // *** End programmer edit section *** (Здание.Человек CustomAttributes)
        [PropertyStorage(new string[] {
                "Человек"})]
        [NotNull()]
        public virtual IIS.HM_Sushhnost.Человек Человек
        {
            get
            {
                // *** Start programmer edit section *** (Здание.Человек Get start)

                // *** End programmer edit section *** (Здание.Человек Get start)
                IIS.HM_Sushhnost.Человек result = this.fЧеловек;
                // *** Start programmer edit section *** (Здание.Человек Get end)

                // *** End programmer edit section *** (Здание.Человек Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Здание.Человек Set start)

                // *** End programmer edit section *** (Здание.Человек Set start)
                this.fЧеловек = value;
                // *** Start programmer edit section *** (Здание.Человек Set end)

                // *** End programmer edit section *** (Здание.Человек Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗданиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеE", typeof(IIS.HM_Sushhnost.Здание));
                }
            }
            
            /// <summary>
            /// "ЗданиеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗданиеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗданиеL", typeof(IIS.HM_Sushhnost.Здание));
                }
            }
        }
    }
}
