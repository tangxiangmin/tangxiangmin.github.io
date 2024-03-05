import{_ as p,c as a,o as e,a2 as l}from"./chunks/framework.DLPB9-dE.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"网络/传输层.md","filePath":"网络/传输层.md","lastUpdated":1709042257000}'),t={name:"网络/传输层.md"},o=l('<h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h2><p>TCP（Transmission Control Protocol）是一种面向连接、可靠的传输层协议，广泛用于互联网和局域网中的数据传输。TCP提供了可靠的、有序的、双向的数据流传输，确保数据的完整性和可靠性。</p><p>以下是TCP的一些重要特点和功能：</p><ul><li><p>面向连接：TCP通过建立连接的方式进行数据传输。在通信之前，发送方和接收方需要通过三次握手建立连接，建立起双向的数据传输通道。连接建立后，可以在双方之间进行数据的可靠传输。</p></li><li><p>可靠性：TCP提供可靠的数据传输，确保数据的完整性和正确性。它使用序列号、确认机制和超时重传等技术来保证数据包的顺序到达、无丢失和无重复。如果数据包丢失或损坏，接收方会请求重传丢失的数据包，以确保数据的可靠性。</p></li><li><p>流量控制：TCP使用流量控制机制来调节数据的发送速率，确保发送方不会以过快的速度发送数据，导致接收方无法及时处理。通过接收方发送的窗口大小通知，发送方可以动态调整发送的数据量，以适应接收方的处理能力。</p></li><li><p>拥塞控制：TCP具备拥塞控制机制，用于控制网络中的拥塞情况。当网络拥塞时，TCP会自动降低发送速率，以减少拥塞的程度。通过使用拥塞窗口、慢启动、拥塞避免和拥塞恢复等算法，TCP可以适应网络的变化，并避免网络拥塞的发生。</p></li><li><p>双向通信：TCP支持全双工的双向通信，允许同时进行发送和接收数据。发送方和接收方可以独立地发送和接收数据，并且可以在同一连接上交替进行发送和接收操作。</p></li><li><p>面向字节流：TCP将数据视为连续的字节流，而不是离散的数据包。TCP会将应用程序发送的数据分割为适当大小的数据块，并在接收端重新组装。这种字节流的方式对应用程序更加透明，应用程序不需要担心数据包的细节。</p></li></ul><p>TCP协议在互联网中被广泛应用，特别是在可靠性要求较高的应用中，如网页浏览、电子邮件传输、文件传输等。它通过提供可靠性、有序性和流控制机制，确保数据在网络中的可靠传输，从而成为网络通信的重要基础。</p><h3 id="三次握手" tabindex="-1">三次握手 <a class="header-anchor" href="#三次握手" aria-label="Permalink to &quot;三次握手&quot;">​</a></h3><p>TCP（传输控制协议）需要进行三次握手（three-way handshake）来建立一个可靠的连接。这是因为TCP是一个面向连接的协议，它提供可靠的数据传输，确保数据的完整性和可靠性。</p><p>下面是三次握手的过程：</p><ul><li><p>第一步（SYN报文）：客户端发送一个带有SYN（Synchronize）标志的报文给服务器，表示客户端请求建立连接，并选择一个初始序列号（sequence number）。</p></li><li><p>第二步（SYN-ACK报文）：服务器收到客户端的请求后，会回复一个带有SYN和ACK（Acknowledgment）标志的报文给客户端，表示服务器接受了连接请求，并且也选择了一个初始序列号。服务器还会分配资源以准备接收客户端的数据。</p></li><li><p>第三步（ACK报文）：客户端收到服务器的回复后，会发送一个带有ACK标志的报文给服务器，确认服务器的连接确认。这个报文中，序列号会增加1，并且确认号（acknowledgment number）会设置为服务器发送的序列号加1。</p></li></ul><p>这三个步骤确保了双方都能正确地建立连接。客户端发送的第一个SYN报文告知服务器它想要建立连接，并选择了一个初始序列号。服务器收到该报文后，发送一个带有自己的SYN和ACK标志的报文作为确认，并为连接分配资源。最后，客户端收到服务器的确认后，发送一个带有ACK标志的报文，确认服务器的连接确认。</p><p>通过三次握手，双方可以确保彼此都能收到对方的连接请求和确认，建立起一个可靠的连接。这种设计可以防止已失效的连接请求被错误地接受（比如客户端发送SYN信号之后被终端了，而服务器等待建立连接的资源无法被释放），并确保双方都具备了可靠数据传输所需的初始序列号和状态信息。</p><h3 id="为什么需要三次握手" tabindex="-1">为什么需要三次握手 <a class="header-anchor" href="#为什么需要三次握手" aria-label="Permalink to &quot;为什么需要三次握手&quot;">​</a></h3><p>参考：</p><ul><li><a href="https://mp.weixin.qq.com/s/_pWRHVoYnPGym7GADLPUPw" target="_blank" rel="noreferrer">TCP为啥要3次握手和4次挥手？握两次手不行吗？</a></li></ul><p>举个现实生活中的例子</p><blockquote><p>朋友A向你发送了一条微信：“在吗？”</p></blockquote><blockquote><p>你收到消息的时候发现已经是两个小时之后了，你需要回复：&quot;在，你还在不？&quot;。</p></blockquote><blockquote><p>这个时候你肯定不会等着他回复，毕竟已经过了两个小时了，他可能在搞其他事。</p></blockquote><blockquote><p>5秒钟后，你收到了朋友A给你的回复：“在”。</p></blockquote><blockquote><p>&quot;OK，上号&quot;。</p></blockquote><p>回到三次握手，通信双方都需要收到对方的确认报文之后才会建立连接，服务端的确认在第二次握手中发送了，而客户端的确认需要再第三次握手中发送</p><p>第一次握手不可避免，毕竟客户端要向服务端发送请求</p><p>第二次握手不可避免，服务端要告诉客户端已接收请求，等待客户端发送新的数据过来</p><p>如果第一次握手传输过程中被延迟了，比如过了一段时间才传到服务端，这个时间超过了客户端的链接超时时长，也就不会再响应服务端返回的第二次握手；</p><p>因此，需要客户端再接收到服务端的请求后再发送一次确认，这就是第三次握手不能避免的原因</p><h3 id="tcp传输确认" tabindex="-1">TCP传输确认 <a class="header-anchor" href="#tcp传输确认" aria-label="Permalink to &quot;TCP传输确认&quot;">​</a></h3><p>建立连接之后，两个机器就可以互相发送数据了</p><p>发送方会携带一个Seq号，以及传输的数据字节数，接收方收到数据后，会响应一个ACK号</p><p>Ack号 = Seq号 + 传递的字节数 + 1</p><p>发送方收到正确的Ack号之后，就知道之前的包传成功了，继续发送下一个数据</p><p><img src="https://img.shymean.com/oPic/1704979787802_41.webp" alt=""></p><p>如果过了一段时间发送方没有收到正确的Ack确认，就认为数据丢包了，这个时候发送方会尝试重新发送数据包</p><p><img src="https://img.shymean.com/oPic/1704979882775_757.webp" alt=""></p><p>基于这个重传机制，TCP能够保证传输数据的准确性。</p><h3 id="四次挥手" tabindex="-1">四次挥手 <a class="header-anchor" href="#四次挥手" aria-label="Permalink to &quot;四次挥手&quot;">​</a></h3><p>TCP（传输控制协议）需要进行四次挥手（four-way handshake）来正确关闭连接。这是因为TCP是一个全双工的协议，数据可以在两个方向上同时传输。四次挥手确保双方都能确认连接的关闭，并允许任何一方在断开连接之前完成剩余的数据传输。</p><p>下面是四次挥手的过程：</p><ul><li><p>第一步（FIN报文）：关闭连接的一方（通常是发起关闭的一方）发送一个FIN（Finish）报文给对方，表示它已经完成了数据的发送。</p></li><li><p>第二步（ACK报文）：接收到FIN报文的一方发送一个ACK（Acknowledgment）报文作为确认，表示它已经收到了关闭请求。</p></li><li><p>第三步（关闭数据传输）：接收到ACK报文的一方发起关闭的一方停止发送数据，但仍允许接收数据。</p></li><li><p>第四步（FIN报文）：接收到ACK报文的对方发送一个FIN报文给发起关闭的一方，表示它也完成了数据的发送。</p></li></ul><p>这四个步骤确保了双方都有机会发送和接收数据，以防止数据丢失或未处理的情况。每个方向上都需要发送一个FIN和收到一个ACK，因此需要四次挥手来完成连接的关闭。</p><p>通过四次挥手，TCP连接的双方能够优雅地关闭连接，并确保数据的可靠传输。这样，双方都可以知道对方已经完成了数据的传输，并且不会丢失任何数据。</p><h3 id="为什么需要四次挥手" tabindex="-1">为什么需要四次挥手 <a class="header-anchor" href="#为什么需要四次挥手" aria-label="Permalink to &quot;为什么需要四次挥手&quot;">​</a></h3><p>假设数据发送方是客户端，当服务端收到客户端的FIN，会先响应一个ACK（确认），此时服务端只知道客户端不会再发送消息，但这个时候客户端可能还会接受数据，会将该状态告诉上层应用</p><p>上层应用汇处理相关的数据，并决定自己是否需要关闭（这个时候上层应用可能还有未发送完的数据），当上层应用数据确认关闭后，会发送一个FIN消息。</p><p>四次挥手与三次握手最大的区别在在于第二次和第三次挥手的ACK和FIN是分开发送的，这是因为服务端需要等待上层应用决定是否关闭服务端的数据发送通道。</p><p>TODO 介绍一下半关闭</p><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-label="Permalink to &quot;UDP&quot;">​</a></h2><p>UDP（User Datagram Protocol）是一种简单的传输层协议，它提供了一种无连接、不可靠的数据传输服务。UDP在互联网中广泛用于实时应用程序和对可靠性要求较低的数据传输</p><p>下面是UDP的一些特点</p><ul><li><p>无连接性：UDP是一种无连接的协议，不需要在数据传输之前建立连接。每个UDP数据包都是独立的，它们在传输过程中不会保留关于连接状态的信息。这使得UDP的开销较小，适用于实时应用程序和快速数据传输。</p></li><li><p>不可靠性：UDP不提供可靠性保证，它不保证数据包的顺序、完整性和可靠传输。UDP数据包发送后，接收方不会发送任何确认或重传丢失的数据包。这使得UDP更快速，但也可能导致数据包丢失或乱序。</p></li><li><p>数据报：UDP使用数据报（Datagram）的方式进行数据传输。每个UDP数据包都有固定的最大长度，IPv4的最大长度为65,535字节（包括头部），IPv6的最大长度更大。数据报包括源端口号和目标端口号，用于标识应用程序和服务。</p></li><li><p>基于端口的通信：UDP通过使用端口号来实现应用程序之间的通信。每个UDP数据包都包含源端口号和目标端口号，接收方根据端口号将数据包交付给相应的应用程序。</p></li><li><p>适用于实时应用程序：UDP的低延迟和简单性使其特别适合实时应用程序，如音频和视频流媒体、实时通信（如语音聊天和视频通话）、在线游戏等。这些应用程序更关注实时性和快速传输，而不太依赖数据的可靠性。</p></li><li><p>广播和多播支持：UDP支持广播和多播功能。广播允许将数据包发送到一个网络中的所有设备，而多播允许将数据包发送到一个预定义的多播组，只有那些已加入该组的设备才能接收。</p></li></ul>',49),i=[o];function r(c,n,P,h,s,u){return e(),a("div",null,i)}const m=p(t,[["render",r]]);export{C as __pageData,m as default};
