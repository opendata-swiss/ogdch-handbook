.. container:: custom-breadcrumbs

   - :fa:`home` :doc:`Handbuch <../../../index>` :fa:`chevron-right`
   - :doc:`Bibliothek <../library>` :fa:`chevron-right`
   - Hosting

*******
Hosting
*******

Intro
------

In order for you to import data to the opendata.swiss catalogue,
the data must be freely accessible somewhere. Only the metadata
and a link to the data are published on opendata.swiss.
Responsibility for actual data hosting lies with the data supplier.

Data hosting is now relatively cheap and simple to manage, even if
you do not yet have a solution in place within your organization.
However, there are some issues you should consider before publication:

Cloud vs. data center?
----------------------

Here we refer to the way your content is serviced on the Internet.
In a data center, your organization would typically be responsible
for running a "full stack", or entire collection, of applications
required for web hosting. This means providing support for DNS,
HTTP, SMTP and other critical protocols using specialized "server"
programs. You often have the ability to decide on each of these
components and pick the best combination. In a cloud environment,
there is sometimes considerably less flexibility, however by
centralizing administration and maintenance, the overall costs per
site can be much lower.

How accessible are backups?
---------------------------

Preparing for disasters, and ensuring that data does not get lost
during updates or changes, are extremely important tasks in setting up
for long-term hosting. Ensure that you know how to get duplicates of
your data, which are ideally being versioned for selective restoration,
find out how much time and effort this process takes - and test it in
advance, to be calm and prepared for any eventuality.

Are there bandwidth restrictions?
----------------------------------

As every smartphone user knows, access to data comes at a cost.
Whether it is uploading large datasets, or potentially being
restricted from sharing your data to a large number of users,
check with your hosting provider on what are the financial and
technical aspects of this question. For instance, some providers
can put special measures in place to "scale up" the rate at which
your content is being distributed ahead of a marketing campaign or
publicity - ensuring that none of your visitors get to see error
messages or outages.

Is there a redundancy measure in place?
----------------------------------------

Redundancy is the concept of having alternative copies of the same
information. In the case of web hosting, this often means having
multiple servers in multiple locations provisioning the exact
same content. This is useful for maximing performance across the
world, or having a "safe failover" - in case one of the copies
(for example, of an e-commerce web site) is for some reason
inaccessible, one of the others immediately/automatically take over,
and no business is lost.
